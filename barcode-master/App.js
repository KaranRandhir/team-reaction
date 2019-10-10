import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import Barcode from "./src/screens/Barcode";
import DataScreen from "./src/screens/DataScreen" ;
import Login from "./src/screens/Login" ;
import English from "./src/screens/English" ;
import English1 from "./src/screens/English1" ;

const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    Barcode : Barcode ,
    DataScreen : DataScreen ,
    Login : Login,
    English : English,
    English1 : English1

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);


export default createAppContainer(navigator);
