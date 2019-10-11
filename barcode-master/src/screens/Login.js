import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


const Login = ({navigation}) => { 

  
  return (
  
  <View style = {styles.mainview}>
   <LinearGradient
          colors={['#6a11cb', '#2575fc']}
           style={{ flex : 1  }}
          >
      
      <Text style={{fontSize : 40,color:"white",marginTop:140 , alignSelf:"center"}}>Select Language</Text>
     
      
      <TouchableOpacity
      onPress = {()=> navigation.navigate("Barcode")}><Text style={{fontSize : 30,color:"white",marginTop:100 , alignSelf:"center"}}>English</Text></TouchableOpacity>
      
      <TouchableOpacity
      onPress = {()=> navigation.navigate("Barcode")}><Text style={{fontSize : 30,color:"white",marginTop : 20, alignSelf:"center"}}>中文</Text></TouchableOpacity>
      
      <TouchableOpacity
      onPress = {()=> navigation.navigate("DataScreen")}><Text style={{fontSize : 30,color:"white",marginTop : 20 , alignSelf:"center"}}>français</Text></TouchableOpacity>
      
      <TouchableOpacity><Text style={{fontSize : 30,color:"white" , marginTop : 20 , alignSelf:"center"}}>हिंदी</Text></TouchableOpacity>
      
      <TouchableOpacity><Text style={{fontSize : 30,color:"white", marginTop : 20 , alignSelf:"center"}}>русский</Text></TouchableOpacity>

      <TouchableOpacity><Text style={{fontSize : 30,color:"white", marginTop : 20 , alignSelf:"center"}}>عربى</Text></TouchableOpacity>

      <TouchableOpacity><Text style={{fontSize : 30,color:"white", marginTop : 20 , alignSelf:"center"}}>Deutsche</Text></TouchableOpacity>

      
      </LinearGradient>
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
    
    
   
    flex :1
  }
});

export default Login;
