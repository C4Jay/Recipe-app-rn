import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = props => {
    return (
        <View style={styles.item}>
        <TouchableOpacity onPress={props.onSelectedMeal}> 
        <View>
        <View style={{...styles.row,...styles.mealh}}>
        <ImageBackground style={styles.img} source={{uri: props.image}}>
            <Text style={styles.topic} numberOfLines={1}>{props.title}</Text>
            </ImageBackground>
        </View>
       
            <View style={{...styles.row,...styles.mealdetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 200,
        width: '100%',
        backgroundColor: '#e6c5b5',
        borderRadius: 10,
        marginTop: 8,
        overflow: 'hidden',
    
    },
    row: {
        flexDirection: 'row'
    },
    mealh: {
        height: '85%',
        justifyContent: 'center'
    },
    mealdetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        height: '15%'
    },
    img: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    topic: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        padding: 10,
        textAlign: 'center'
    }

})

export default MealItem;