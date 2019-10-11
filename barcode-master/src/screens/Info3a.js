import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"
import Voice from "./../Voice"

const Info3a = ({navigation}) => { 
  
  return (
  
  <View style = {styles.mainview}>
  <Image source = {require("../../assets/photos/motimasjid.jpg")}
      style = {{height : 350, width :420,alignSelf : "center"}}/>
  
      {/* <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:70}}>Moti Masjid</Text>
      <View style={styles.iconstyle}>
      <Voice/>
      </View>
      </View> */}
   
    <View style={styles.main}>
   
    <View style={styles.content}>
       <Text style={styles.head}>
           Moti Masjid
       </Text>
       <View style={styles.iconstyle}>
      <Voice/>
      
      </View>
      <View>

    <Text style={styles.tex}>
    The Moti Masjid is a white marble mosque inside the Red Fort complex in Delhi, India. The name translates into English as "Pearl Mosque". 

      </Text>

     
     
      </View>


        <View style={styles.contenta}>
    

    <Text style={styles.tex}>
    The mosque was built by the Mughal emperor Aurangzeb at the Red Fort complex in Delhi, India, from 1659-1660 for his 2nd wife Nawab Bai. The mosque was also used by the ladies of the Zenana. The mosque was constructed at a cost of Rs. 160,000.


      </Text>

     
     
      </View>

      <View style={styles.proceed}>
           <TouchableOpacity
             onPress = {() => navigation.navigate("Location3")}>
              <Text
              style={{fontSize : 25 , color : "white"}} 
              
              > >> PROCEED >>
                  </Text>
           </TouchableOpacity>
          
      </View>
    
    
      
    </View>


        {/* <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 90 , alignSelf : 'center',  padding : 10  }}
        onPress = {()=> navigation.navigate("Barcode")}>
          <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>Next</Text> 
          </TouchableOpacity> */}
    </View>


      
    
      {/* <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 20,paddingHorizontal:20}}>
      The Moti Masjid is a white marble mosque inside the Red Fort complex in Delhi, India. The name translates into English as "Pearl Mosque.(Hindustani: موتی مسجد, मोती मस्जिद) Located to the west of the Hammam and close to the Diwan-e-Khas, it was built by the Mughal emperor Aurangzeb from 1659-1660.
     </Text>

     <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20}}>
     The mosque was built by the Mughal emperor Aurangzeb at the Red Fort complex in Delhi, India, from 1659-1660 for his 2nd wife Nawab Bai. The mosque was also used by the ladies of the Zenana. The mosque was constructed at a cost of Rs. 160,000.
</Text> */}
    

      

     
   
        
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
  },
  iconstyle : {
   
    marginTop : -40 ,
    marginLeft : 290,
    
    fontSize : 20,
    
   

  },
  heading :{
      
    flexDirection:"row"
  },
  tex: {
    fontSize : 20,
    marginTop : 15,
    marginLeft : 20,
    marginRight : 20,

    color : "#43464B"

  },
  main : {
      backgroundColor : "#EAEAEA",
      height : 540
  },
  head:{
    fontSize : 30,
    marginTop : 20,
    marginLeft : 20
  },

  proceed : {
      marginTop : 20,
      alignSelf : "center",
      backgroundColor : "#3D4849",
      padding : 12,
      borderRadius : 20
  },
  content : {
      backgroundColor : "#FFFFFF",
      width : 370,
      borderRadius : 20,
      alignSelf : "center",
      marginTop : -20,
      height : 210},

      contenta : {
        backgroundColor : "#FFFFFF",
        width : 370,
        borderRadius : 20,
        alignSelf : "center",
        marginTop : 60,
        height : 238}
});

export default Info3a;
