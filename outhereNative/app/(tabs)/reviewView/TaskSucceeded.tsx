import { View, Text, StyleSheet } from "react-native";
import SliderComponent from "./SliderComponent";

const TaskSucceeded = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Good job!</Text>
      <View style={styles.selectionsContainer}>
        <SliderComponent header={"How easy was it?"} />
        <SliderComponent header={"Did you enjoy the task?"} />
        <SliderComponent
          header={"Do you feel good after completing the task?"}
        />
      </View>
    </View>
  );
};

export default TaskSucceeded;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#184632",
    alignItems: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    top: 20,
  },
  selectionsContainer: {
    top: 50,
    width: "100%",
    height: "80%",
    alignItems: "center",
  },
});
