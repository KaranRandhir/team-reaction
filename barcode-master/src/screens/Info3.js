import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"


const Info3 = ({navigation}) => { 
  
  return (
  
  <View style = {styles.mainview}>
      <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:20}}>Moti Masjid</Text>
      <AntDesign name="sound" style={styles.iconstyle}/>
      </View>
    <ScrollView showsHorizontalScrollIndicator = {false}
    showsVerticalScrollIndicator = {false}>
      <Image source = {require("../../assets/photos/motimasjid.jpg")}
      style = {{height : 400, width :400, marginTop:50,alignSelf : "center"}}/>
    
      <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 20,paddingHorizontal:20}}>
      The Moti Masjid is a white marble mosque inside the Red Fort complex in Delhi, India. The name translates into English as "Pearl Mosque."[1](Hindustani: موتی مسجد, मोती मस्जिद) Located to the west of the Hammam and close to the Diwan-e-Khas, it was built by the Mughal emperor Aurangzeb from 1659-1660.
     </Text>

     <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20}}>
     The mosque was built by the Mughal emperor Aurangzeb at the Red Fort complex in Delhi, India, from 1659-1660 for his 2nd wife Nawab Bai. The mosque was also used by the ladies of the Zenana. The mosque was constructed at a cost of Rs. 160,000.
</Text>
        </ScrollView>

        <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 90 , alignSelf : 'center',  padding : 10  }}
        onPress = {()=> navigation.navigate("Barcode")}>
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

export default Info3;
