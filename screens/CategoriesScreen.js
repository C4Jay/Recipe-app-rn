import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity, Platform} from 'react-native';
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
        let renderGridItem = (oneitem) => {
        return (
        <TouchableOpacity style={styles.grid} onPress={() => {this.props.navigation.navigate({routeName:'CategoryMeals', params: {
            categoryId: oneitem.item.id,
            categoryname: oneitem.item.title
        }})}}>
        <View ><Text style={{color: 'green' }}>{oneitem.item.title}</Text></View>
        </TouchableOpacity>
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