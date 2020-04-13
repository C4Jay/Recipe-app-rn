import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import MealItem from '../components/MealItem';

const FavoritesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Favorites Screen</Text>{/* 
            <Text>{props.favoritemeal1}</Text>
            <Text>{props.favoritemeal2}</Text> */}{/* 
            <Text>{props.favorite}</Text> */}

      
 
            <ScrollView>
                <View style={styles.grid}>
            {props.favorites.map(single => {
                return ( <MealItem
                style={styles.item}
                title={single.title} 
                duration={single.duration} 
                
                onSelectedMeal={() => {props.navigation.navigate({routeName: 'MealDetail', params: {
                    specmealId: single.id,
                    itemtitle: single.title,
                    wholeitem: single
                }})}}

                affordability={single.affordability}
                complexity={single.complexity}
                image={single.imageUrl}
                ></MealItem>
                )
            })}
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        marginHorizontal: 8
    },
    grid: {
        marginHorizontal: 8
    }
  
})


const mapSToProps = (state, ownProps) => {
    return {
        favoritemeal: state.favoritelist[0],       
        favoritemeal1: state.favoritelist[2],      
        favoritemeal2: state.favoritelist[3],
        favorites: state.favoritelist,       
        favorite: state.favorites
    }
}

export default connect(mapSToProps)(FavoritesScreen);