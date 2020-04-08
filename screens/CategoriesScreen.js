import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy';



const CategoriesScreen = (props) => {
    console.log(props)
    const renderGridItem = (oneitem) => {
        return (
        <TouchableOpacity style={styles.grid} onPress={() => {props.navigation.navigate('CategoryMeals')}}>
        <View ><Text style={{color: 'green' }}>{oneitem.item.title}</Text></View>
        </TouchableOpacity>
        ) 
    }
    return (
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}>

       </FlatList>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid: {
        flex: 1,
        margin: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 168
    }
})

export default CategoriesScreen;