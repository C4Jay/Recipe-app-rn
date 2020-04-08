import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy';

const renderGridItem = (oneitem) => {
    return <View style={styles.grid}><Text style={{color: 'green' }}>{oneitem.item.title}</Text></View>
}

const CategoriesScreen = (props) => {
    console.log(props)
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