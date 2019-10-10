import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"
import Voice from "./../Voice"


const English = ({navigation}) => { 
  

  
  return (
  

  <View style = {styles.mainview}>
      <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:20}}>Red Fort</Text>
      <View style={styles.iconstyle}>
      <Voice/>
      </View>
      </View>
    <ScrollView showsHorizontalScrollIndicator = {false}
    
    showsVerticalScrollIndicator = {false}>
      <Image source = {require("../../assets/photos/redFort.jpg")}
      style = {{height : 400, width :400, marginTop:50,alignSelf : "center"}}/>
    
      <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 20,paddingHorizontal:20}}>Red Fort, also called Lal Qalʿah, also spelled Lal Kila or Lal Qila, Mughal fort in Old Delhi, India. 
          It was built by Shah Jahān in the mid-17th century and remains a major tourist attraction. 
          The fort was designated a UNESCO World Heritage site in 2007.</Text>

     <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20}}>The fort’s massive red sandstone walls, which stand 75 feet (23 metres) high, enclose a complex of palaces and entertainment halls, 
        projecting balconies, baths and indoor canals, and geometrical gardens, as well as an ornate mosque. 
        Among the most famous structures of the complex are the Hall of Public Audience (Diwan-i-Am), 
        which has 60 red sandstone pillars supporting a flat roof, and the Hall of Private Audience (Diwan-i-Khas), 
        which is smaller, with a pavilion of white marble.</Text>
        </ScrollView>

        <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 90 , alignSelf : 'center',  padding : 10  }}
        onPress = {()=> navigation.navigate("Location1")}>
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

export default English;
