import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen';

const Mealsnav = createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen, 
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? '#d303fc' : '#d303fc',
          },
          headerTintColor: 'white',
          headerTitleStyle: { 
          },
          headerTitleAlign: 'center'
         
    }
})

export default createAppContainer(Mealsnav);