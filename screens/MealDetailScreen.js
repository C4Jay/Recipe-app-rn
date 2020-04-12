import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy';

var nameofmeal = ''

const MealDetailScreen = (props) => {

    const id = props.navigation.getParam('specmealId')
    const name = props.navigation.getParam('itemtitle')
    nameofmeal = props.navigation.getParam('itemtitle')
    const specmeal = MEALS.find(meal => meal.id === id)
    
    return (
        <View style={styles.screen}>
            <Text>MealDetail Screen</Text>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{specmeal.title}</Text>
        </View>
    )
}

MealDetailScreen['navigationOptions'] = screenProps => ({
    title: nameofmeal,
    headerStyle: {
        backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? '#d303fc' : '#d303fc',
      },
      headerTintColor: 'green',
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

export default MealDetailScreen;