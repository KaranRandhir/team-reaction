import React from "react" ;
import { Text, StyleSheet,View,Button,TextInput,Image ,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio, Video } from 'expo-av';
import {AntDesign} from "@expo/vector-icons"


const English1 = () => { 
  

  
  return (
  

  <View style = {styles.mainview}>
      <View style={styles.heading}>
      <Text style={{fontSize : 40,color:"white",marginTop:20}}>Quiz</Text>
      
      </View>
    <ScrollView showsHorizontalScrollIndicator = {false}
    
    showsVerticalScrollIndicator = {false}>
      
      <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 100,paddingHorizontal:20}}>
      1. Red fort was built by which emperor ?
      </Text>

      <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 50, width : 250 , alignSelf : 'center',  padding : 10,  }}
        >
          <Text style={{ color:"white",fontSize:20,textAlign:"center",}}>A. Emperor Shah Jahan </Text> 
          </TouchableOpacity>
          
          <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 250 , alignSelf : 'center',  padding : 10  }}
        >
        <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>B. Emperor Akbar </Text> 
        </TouchableOpacity>

         <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 250 , alignSelf : 'center',  padding : 10  }}
        >
          <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>C. Emperor Jahangir</Text> 
          </TouchableOpacity>
 
          <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 250 , alignSelf : 'center',  padding : 10  }}
        >
          <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>D. Emperor Jahangir</Text> 
          </TouchableOpacity>


         <Text style = {{fontSize : 20 ,color: "white",textAlign :"center",paddingTop : 100,paddingHorizontal:20}}>
      2. How many years it took to built Red Fort ?
      </Text>

      <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 50, width : 250 , alignSelf : 'center',  padding : 10,  }}
        >
          <Text style={{ color:"white",fontSize:20,textAlign:"center",}}>A. 10 </Text> 
          </TouchableOpacity>
          
          <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 250 , alignSelf : 'center',  padding : 10  }}
        >
        <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>B. 20 </Text> 
        </TouchableOpacity>

         <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 250 , alignSelf : 'center',  padding : 10  }}
        >
          <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>C. 15</Text> 
          </TouchableOpacity>
 
          <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 250 , alignSelf : 'center',  padding : 10  }}
        >
          <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>D. 5</Text> 
          </TouchableOpacity>

     
     
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

export default English1;