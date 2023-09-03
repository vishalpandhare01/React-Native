import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GaoalIteames(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }} // android
        onPress={props.deleteGoalHandler.bind(this, props.id)}
        style={({pressed})=>pressed && styles.pressItem} // ios
        >  
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = new StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressItem:{
    opacity:0.5
  }
});
