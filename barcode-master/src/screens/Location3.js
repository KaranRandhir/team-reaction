import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import {AntDesign} from "@expo/vector-icons"


const Location3 = ({navigation}) => { 
  

  
  return (
  

  <View style = {styles.mainview}>

      {/* <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"black",marginTop:70 , alignSelf:"center"}}>Next QR Code</Text>
      
      </View> */}
   
      <Image source = {require("../../assets/photos/Location3.jpg")}
      style = {{height : 700, width :370, borderRadius : 15, marginTop:70,alignSelf : "center"}}/>
 
     

        <View style={styles.proceed}>
           <TouchableOpacity
             onPress = {() => navigation.navigate("Info4")}>
              <Text
              style={{fontSize : 25 , color : "white"}} 
              
              > >> PROCEED >>
                  </Text>
           </TouchableOpacity>
          
      </View>

     
   
      
  </View>
)
};

const styles = StyleSheet.create({
  heading : {
    alignItems : "center",
    justifyContent : "center",
    
  },
  button : {
    alignItems : "center",
    justifyContent : "center",
    flex:3
  },
  text: {
    marginVertical : 40 ,
    fontSize: 30 ,
    backgroundColor : "blue" 
  } ,
  mainview : {
    backgroundColor : "#EAEAEA",
    
   
    flex :1
  },
  proceed : {
    marginTop : 30,
    alignSelf : "center",
    backgroundColor : "#3D4849",
    padding : 12,
    borderRadius : 20
},
  iconstyle : {
    position: "absolute",
    marginLeft : 200,
    fontSize : 40,
    color : "white",
    marginTop : 30,

  },
  heading :{
    flexDirection:"row"
  }
});

export default Location3;
