import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Custombutton from '../components/Helperbutton';

import { connect } from 'react-redux';

import { Button } from 'react-native-paper';

import MealItem from '../components/MealItem';

var nameofmeal = ''

const MealDetailScreen = (props) => {

    const id = props.navigation.getParam('specmealId')
    const name = props.navigation.getParam('itemtitle')
    nameofmeal = props.navigation.getParam('itemtitle')
    const specmeal = MEALS.find(meal => meal.id === id)
    const meal = props.navigation.getParam('wholeitem')

    

    const setHandler = (meal) => {
        /* props.onFavSet(name) */
        props.onMealSet(meal)
    }
    
    return (
        <View style={styles.screen}>
            <Text>MealDetail Screen</Text>
            {/* <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{specmeal.title}</Text> */}
       <View>
       <MealItem
        title={meal.title} 
        duration={meal.duration} 
       
        affordability={meal.affordability}
        complexity={meal.complexity}
        image={meal.imageUrl}
        ></MealItem>
        </View>
            <Button onPress={() => setHandler(meal)}>click</Button>
         
            <View>
            </View>
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
      headerRight: () => {return ( <HeaderButtons HeaderButtonComponent={Custombutton}>
          <Item 
          title="Favorite" 
          iconName="ios-star" 
          onPress={() => screenProps.onFavSet}></Item>
      </HeaderButtons>)}
})

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapDispatchToProps = dispatch => {
    return{
        onMealSet: (name) => dispatch({type: 'MEALSET', value: name}),
        onFavSet: (meal) => dispatch({type: 'FAVOSET', value: meal})
    }
}

export default connect(null, mapDispatchToProps)(MealDetailScreen);