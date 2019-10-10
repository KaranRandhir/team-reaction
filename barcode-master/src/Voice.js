import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';
import {MaterialIcons} from "@expo/vector-icons" ;
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Voice extends React.Component {



  speak() {
    var thingToSay = "It was built by Shah Jahān in the mid-17th century and remains a major tourist attraction.";
    Speech.speak(thingToSay);
  }

  render() {
    return (
      <View >
        <TouchableOpacity onPress={this.speak} >
        <MaterialIcons name="record-voice-over" style={styles.iconstyle}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding : 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  iconstyle : {
    fontSize : 35,
    color : "white"
  }
 
});
