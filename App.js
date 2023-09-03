import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";
import { useState } from "react";
import GaoalIteames from "./components/GoalList";
import GoalInput from "./components/Goalinput";

export default function App() {
  const [entiredGoalText, setEntiredGoalText] = useState("");
  const [listOfGoal, setListOfGoal] = useState([]);
  const [modalVisible,setModalvissible] = useState(false)

  function goalInpuHandler(entireText) {
    setEntiredGoalText(entireText);
  }

  function addGoalhandler() {
    setListOfGoal((curruntCourseGoal) => [
      ...curruntCourseGoal,
      { text: entiredGoalText, id: Math.random().toString() },
    ]);
    startaddGoalhandler()
  }

  function deleteGoalHandler(id){
    setListOfGoal(curruntCourseGoal=>{
      return curruntCourseGoal.filter((goal)=>goal.id !== id)
    })
  } 

function startaddGoalhandler(){
  !modalVisible ? setModalvissible(true):setModalvissible(false)
}

  return (
    <>
    <StatusBar style="inverted"/>
    <View style={styles.appContainer}>
      <Button title="Add Goal" color='#a065ec' onPress={startaddGoalhandler} />
      <GoalInput
         visible={modalVisible}
        goalInpuHandler={goalInpuHandler}
        addGoalhandler={addGoalhandler}
        cancel={startaddGoalhandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoal}
          renderItem={(iteamData) => {
            return <GaoalIteames
            id={iteamData.item.id}
             text={iteamData.item.text}
             deleteGoalHandler={deleteGoalHandler}
             />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
   
  },
  goalsContainer: {
    flex: 5,
  },
});
