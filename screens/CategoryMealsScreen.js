import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CategoryMeals = (props) => {
    return (
        <View style={styles.screen}>
            <Text>CategoryMeals Screen</Text>
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