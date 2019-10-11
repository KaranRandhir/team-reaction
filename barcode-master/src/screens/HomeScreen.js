import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';



const HomeScreen = ({navigation}) => { 
  const[name, changeName] = useState("")
  const[pass, changePass] = useState("")
  
  return (
  
  <View style = {styles.mainview}>
   <LinearGradient
          colors={['#6a11cb', '#2575fc']}
           style={{ flex : 1  }}
          >
       <View style={styles.heading}>
       <Text style = {{fontSize : 60,fontWeight:"bold" ,color : "white", marginTop : 120 ,marginBottom :50,
       
      }}>Xploree</Text>
       </View>
       <View >
       <TextInput style={{ fontSize : 20 ,paddingBottom : 10,color : "white",backgroundColor :"rgba(0,0,0,0)",borderBottomColor:"rgba(255,255,255,0.6)", borderBottomWidth: 1 , marginTop : 130 ,marginBottom:10,marginLeft :20,marginRight:20}}
        placeholder = " Username"
        value = {name}
        onChangeText = {newValue => changeName(newValue)}> 
        </TextInput>
        <TextInput secureTextEntry={true} style={{ fontSize : 20, paddingBottom : 10,color : "white",backgroundColor :"rgba(0,0,0,0)",borderBottomColor:"rgba(255,255,255,0.6)", borderBottomWidth: 1 ,marginTop :10 ,marginBottom:10,marginLeft:20,marginRight:20}}
        placeholder = " Password"
        value = {pass}
        onChangeText = {newValue => changePass(newValue)}> 
         </TextInput>
        <TouchableOpacity 
        style = {{backgroundColor : 'rgba(0,0,0,0.3)' , marginTop : 20 , width : 90 , alignSelf : 'center',  padding : 10  }}
        onPress = {()=> navigation.navigate("Login")}>
          <Text style={{ color:"white",fontSize:20,textAlign:"center"}}>Log In</Text> 
          </TouchableOpacity>
        
          <Text style={{color:"white",fontSize:15,textAlign:"center",marginTop:200}}>Not an Xplorer yet ?</Text> 
          <TouchableOpacity
        onPress = {()=> navigation.navigate("Login")}>
          <Text style={{color:"white",fontSize:20,textAlign:"center"}}>Sign Up</Text> 
          </TouchableOpacity> 

      </View> 
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

export default HomeScreen;
/*<View style = {styles.button}>
        <Button 
        
        title="Press to Scan"
        onPress={()=> navigation.navigate("Barcode")}/>
      </View> */