import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const FavoritesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Favorites Screen</Text>
            <Text>{props.demo}</Text>
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


const mapSToProps = (state, ownProps) => {
    return {
        demo: "hamburger"
    }
}

export default connect(mapSToProps)(FavoritesScreen);