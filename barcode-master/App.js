import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import Barcode from "./src/screens/Barcode";
import DataScreen from "./src/screens/DataScreen" ;
import Login from "./src/screens/Login" ;
import English from "./src/screens/English" ;
import English1 from "./src/screens/English1" ;
import Location1 from "./src/screens/Location1";
import Info1 from "./src/screens/Info1";
import Location2 from "./src/screens/Location2";
import Info2 from "./src/screens/Info2";
import Location3 from "./src/screens/Location3";
import Info3 from "./src/screens/Info3";

const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    Barcode : Barcode ,
    DataScreen : DataScreen ,
    Login : Login,
    English : English,
    English1 : English1,
    Location1 : Location1,
     Info1 : Info1,
    Location2 : Location2,
  Info2 : Info2,
  Location3 : Location3,
  Info3 : Info3
   },
  {
    defaultNavigationOptions: {
     /* title: 'App'  */
     header : null 
  } 
  }
);


export default createAppContainer(navigator);
