import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"


const English = ({navigation}) => { 
  

  
  return (
  

  <View style = {styles.mainview}>
      <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:20}}>Red Fort</Text>
      <AntDesign name="sound" style={styles.iconstyle}/>
      </View>
    <ScrollView showsHorizontalScrollIndicator = {false}
    
    showsVerticalScrollIndicator = {false}>
     
      <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 20,paddingHorizontal:20}}>
     1. Beware of scams and touts. Avoid timeshare scams . If you do get pressured in to buying one, go through a timeshare exit when you leave
         </Text>

     <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20,paddingTop : 20}}>
     2. Always carry a handkerchief
        </Text>
        

        
     <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20,paddingTop : 20}}>
     3. Acknowledge that Indians and foreigners have to pay different tariffs and entry fees at historical monuments and museums
        </Text>
        
        <Text style = {{fontSize : 20 ,color: "white",textAlign : "center",paddingHorizontal:20,paddingTop : 20}}>
     4. Learn some Hindi or the local language. India has 22 official languages. Think of it this way, each Indian state has a different Indian language. 
     Hindi is the official language and spoken by 60% of the population.
      English is common across India. Here’s my Hindi book for your travels in India
        </Text>
        </ScrollView>
   
        
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
