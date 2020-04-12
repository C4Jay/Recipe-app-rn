import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

var topic = ''
var color = ''

const CategoryMeals = (props) => {


    const id = props.navigation.getParam('categoryId')
    const category = CATEGORIES.find(cat => cat.id === id)

    useEffect(() => {
        topic = props.navigation.getParam('categoryname')
        color = props.navigation.getParam('categorycolor')
        
         
    })

    const specmeal = MEALS.filter(meal => meal.categoryIds.indexOf(id) >= 0)

    
    const renderGrid = items => {
        return <MealItem 
        title={items.item.title} 
        duration={items.item.duration} 
        onSelectedMeal={() => {props.navigation.navigate({routeName: 'MealDetail', params: {
            specmealId: items.item.id,
            itemtitle: items.item.title
        }})}}
        affordability={items.item.affordability}
        complexity={items.item.complexity}
        image={items.item.imageUrl}
        ></MealItem>
       
    }
    return (
        
        <View style={styles.screen}>
            <FlatList style={styles.list} data={specmeal} keyExtractor={(item, index) => item.id}
            renderItem={renderGrid}></FlatList>
            <Button title="Go meals" onPress={() => props.navigation.navigate('MealDetail')}></Button>
        </View>
    )
}

CategoryMeals['navigationOptions'] = screenProps => ({
    title: topic,
    headerStyle: {
        backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? '#d303fc' : '#d303fc',
      },
      headerTintColor: color,
      headerTitleStyle: { 
      },
})

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    
    grid: {
        flex: 1,
        margin: 15,/* 
        textAlign: 'center', */
        justifyContent: 'center',
        alignItems: 'center',
        height: 168,
        borderRadius: 10,
        overflow: 'hidden'

    },
    itemsgrid: {
        flex: 1, 
       
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 9,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridtext: {
        flex: 1, 
        width: 190,
        maxWidth: '98%', 
        height: 100,
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    list: {
        width: '98%',
        textAlign: 'center',

    }
})

export default CategoryMeals;