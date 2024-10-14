import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SliderComponent from "./SliderComponent";

const TaskSucceeded = () => {
  const handlePress = () => {};

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
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonSecondaryStyle}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
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
  buttonWrapper: {
    position: "relative",
    height: 100,
    width: 260,
  },
  buttonStyle: {
    height: 100,
    width: 260,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#568f56",
    position: "absolute",
  },
  buttonSecondaryStyle: {
    height: 100,
    width: 260,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    top: 5,
    left: 5,
  },
  textStyle: {
    color: "white",
    fontSize: 50,
  },
});
