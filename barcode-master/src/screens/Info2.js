import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"


const Info2 = ({navigation}) => { 
  
  return (
  
  <View style = {styles.mainview}>
      <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:20}}>Diwan-i-Am</Text>
      <AntDesign name="sound" style={styles.iconstyle}/>
      </View>
    <ScrollView showsHorizontalScrollIndicator = {false}
    showsVerticalScrollIndicator = {false}>
      <Image source = {require("../../assets/photos/diwan.jpg")}
      style = {{height : 400, width :400, marginTop:50,alignSelf : "center"}}/>
    
      <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 20,paddingHorizontal:20}}>
      The Diwan-i-Am, or Hall of Audience, is a room in the Red Fort of Delhi where the Mughal emperor Shah Jahan (1628-1658) and his successors received members of the general public and heard their grievances.
     </Text>

     <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20}}>
     The inner main court to which the Nakkarkhana led was 540 feet broad, 420 feet deep, and surrounded by arcade galleries, where chieftains (umaras) on duty were posted.[2] On the further side of it is the Diwan-i-Am.

The Diwan-i-Am consists of a front hall, open on three sides and backed by a set of rooms faced in red sandstone.
</Text>
        </ScrollView>

        <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 90 , alignSelf : 'center',  padding : 10  }}
        onPress = {()=> navigation.navigate("Location3")}>
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

export default Info2;
