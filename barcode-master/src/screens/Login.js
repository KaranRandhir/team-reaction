import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login = ({navigation}) => { 

  
  return (
  
  <View style = {styles.mainview}>
      
      <Text style={{fontSize : 30,color:"white",marginTop:20}}>Select language</Text>
     
      
      <TouchableOpacity
      onPress = {()=> navigation.navigate("English")}><Text style={{fontSize : 30,color:"white",marginTop:80}}>English</Text></TouchableOpacity>
      
      <TouchableOpacity
      onPress = {()=> navigation.navigate("Barcode")}><Text style={{fontSize : 30,color:"white",marginTop : 20}}>中文</Text></TouchableOpacity>
      
      <TouchableOpacity
      onPress = {()=> navigation.navigate("DataScreen")}><Text style={{fontSize : 30,color:"white",marginTop : 20}}>français</Text></TouchableOpacity>
      
      <TouchableOpacity><Text style={{fontSize : 30,color:"white" , marginTop : 20}}>हिंदी</Text></TouchableOpacity>
      
      <TouchableOpacity><Text style={{fontSize : 30,color:"white", marginTop : 20}}>русский</Text></TouchableOpacity>
      
        
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
  }
});

export default Login;
