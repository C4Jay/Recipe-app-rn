import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';


const Mealsnav = createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
    FavoritesScreen: FavoritesScreen,
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

/* const MealsFavTabNavigator = createMaterialBottomTabNavigator({
    Meals: {
        screen: Mealsnav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                    name="ios-star"
                    size={20}
                    ></Ionicons>
                )
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                    name="ios-star"
                    size={20}
                    ></Ionicons>
                )
            }
        }
    }
}) */


export default createAppContainer(Mealsnav);