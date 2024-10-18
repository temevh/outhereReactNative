import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SliderComponent from "./SliderComponent";
import TextField from "./TextField";
import { router } from "expo-router";
import { useState } from "react";

const TaskSucceeded = () => {
  const handlePress = () => {
    router.back();
  };

  const [review, setReview] = useState({
    easiness: 0,
    enjoyment: 0,
    feeling: 0,
    text: "",
  });

  const handleFieldChange = (field: string, value: number | string) => {
    setReview((prevReview) => ({
      ...prevReview,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Good job!</Text>
      <View style={styles.selectionsContainer}>
        <SliderComponent
          header={"How easy was the task?"}
          onValueChange={handleFieldChange}
          field="easiness"
        />
        <SliderComponent
          header={"Did you enjoy the task?"}
          onValueChange={handleFieldChange}
          field="enjoyment"
        />
        <SliderComponent
          header={"Do you feel good after completing the task?"}
          onValueChange={handleFieldChange}
          field="feeling"
        />
        <TextField
          header={"Write a few words about the task"}
          onValueChange={handleFieldChange}
          field="text"
        />
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={handlePress}>
        <View style={styles.whiteContainer}></View>
        <Text style={styles.textStyle}>Submit</Text>
      </TouchableOpacity>
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
  buttonStyle: {
    height: 100,
    width: 260,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#568f56",
  },
  whiteContainer: {
    height: 90,
    width: 250,
    borderRadius: 24,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
  },
  textStyle: {
    color: "black",
    fontSize: 50,
    zIndex: 2,
  },
});
