import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import { CATEGORIES } from '../data/dummy';



class CategoriesScreen extends Component {
    static navigationOptions = {
        title: 'Categories',
        headerStyle: {
          backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? '#d303fc' : '#d303fc',
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
        },
    }
    
    render () {
        let Touchcomp = TouchableOpacity

        if(Platform.OS === 'android' && Platform.Version >= 21){
            Touchcomp = TouchableNativeFeedback
        }

        let renderGridItem = (oneitem) => {
        return (
        <View style={styles.grid}>
        <Touchcomp style={{flex: 1}} onPress={() => {this.props.navigation.navigate({routeName:'CategoryMeals', params: {
            categoryId: oneitem.item.id,
            categoryname: oneitem.item.title,
            categorycolor: oneitem.item.color
        }})}}>
        <View style={{...styles.itemsgrid, backgroundColor: oneitem.item.color }}><Text numberOfLines={2} style={styles.gridtext}>{oneitem.item.title}</Text></View>
        </Touchcomp>
        </View>
        ) 
    }
    return (
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}>

       </FlatList>
    )
    }
}




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',/* 
        alignItems: 'center' */
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
    }
})

export default CategoriesScreen;