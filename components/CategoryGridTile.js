import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.grid} onPress={() => {this.props.navigation.navigate({routeName:'CategoryMeals', params: {
            categoryId: oneitem.item.id,
            categoryname: oneitem.item.title
        }})}}>
        <View ><Text style={{color: 'green' }}>{oneitem.item.title}</Text></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 168
    }
})

export default CategoryGridTile