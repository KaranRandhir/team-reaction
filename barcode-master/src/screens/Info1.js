import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"


const Info1 = ({navigation}) => { 
  
  return (
  
  <View style = {styles.mainview}>
      <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:20}}>Lahori Gate</Text>
      <AntDesign name="sound" style={styles.iconstyle}/>
      </View>
    <ScrollView showsHorizontalScrollIndicator = {false}
    showsVerticalScrollIndicator = {false}>
      <Image source = {require("../../assets/photos/lahori.jpg")}
      style = {{height : 400, width :400, marginTop:50,alignSelf : "center"}}/>
    
      <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 20,paddingHorizontal:20}}>
      The Lahori Gate is the main entrance to the Red Fort in Delhi. The fort is approached through a covered street flanked by arcaded apartments called the Chhatta Chowk.
     </Text>

     <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20}}>
     The gateway consists of three stories, each decorated with square, rectangular and cusped arched panels. These are flanked by semi-octagonal towers crowned by two open octagonal pavilions. The whole gate is clad in red sandstone, except the roofs of the pavilions, where white stone is used.
</Text>
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
    marginLeft : 230,
    fontSize : 40,
    color : "white",
    marginTop : 30,

  },
  heading :{
    flexDirection:"row"
  }
});

export default Info1;
