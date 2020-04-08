import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from '../data/dummy';

const CategoryMeals = (props) => {
    const id = props.navigation.getParam('categoryId')
    const category = CATEGORIES.find(cat => cat.id === id)
    return (
        <View style={styles.screen}>
            <Text>CategoryMeals</Text>
            <Text>{category.title} </Text>
            <Button title="Go meals" onPress={() => props.navigation.navigate('MealDetail')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMeals;