import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from '../data/dummy';

var topic = ''
var color = ''

const CategoryMeals = (props) => {


    const id = props.navigation.getParam('categoryId')
    const category = CATEGORIES.find(cat => cat.id === id)

    useEffect(() => {
        topic = props.navigation.getParam('categoryname')
        color = props.navigation.getParam('categorycolor')
        
         
    })

    

    return (
        
        <View style={styles.screen}>
            <Text>CategoryMeals</Text>
            <Text>{category.title} </Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMeals;