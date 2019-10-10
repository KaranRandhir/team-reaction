import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"


const Location3 = ({navigation}) => { 
  

  
  return (
  

  <View style = {styles.mainview}>
      <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:20}}>Next QR Code</Text>
      
      </View>
    <ScrollView showsHorizontalScrollIndicator = {false}
    
    showsVerticalScrollIndicator = {false}>
      <Image source = {require("../../assets/photos/Location3.jpg")}
      style = {{height : 650, width :400, marginTop:25,alignSelf : "center"}}/>
 
        </ScrollView>

        <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 90 , alignSelf : 'center',  padding : 10  }}
        onPress = {()=> navigation.navigate("Info3")}>
          <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>Next</Text> 
          </TouchableOpacity>

     
   
        
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
    backgroundColor : "#1C2A3E",
    alignItems : "center",
    
   
    flex :1
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
