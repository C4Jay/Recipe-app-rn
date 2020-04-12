import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Mealsnav from './nav/Mealsnav';

import AppsStack from './nav/Mealsnav';
import Customnav from './nav/Switch';
import Tab from './nav/Switch';
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf')
  })
}
export default function App() {

  const [fontLoaded, setfontLoaded] = useState(false)

  if(!fontLoaded) {
    return (
    <AppLoading startAsync={fetchFonts}
    onFinish={() => setfontLoaded(true)} />
    )
  }
  return (
    
    <Mealsnav></Mealsnav>
  
  
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
