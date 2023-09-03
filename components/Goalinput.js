import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View ,Image } from "react-native";
import goalImage from '../assets/download.jpg'

export default function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputConainer}>
      <Image source={require('../assets/download.jpg')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter here"
          onChangeText={props.goalInpuHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={props.addGoalhandler} color='#5e0acc' />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.cancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = new StyleSheet.create({
  inputConainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderColor: "#cccccc",
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:"#120438",
    width: "90%",
    borderRadius:6,
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
