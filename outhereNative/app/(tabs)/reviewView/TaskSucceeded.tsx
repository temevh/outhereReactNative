import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const TaskSucceeded = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Good job!</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.sliderStyle}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          step={1}
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
  sliderContainer: {
    top: 50,
    width: "100%",
    height: "70%",
    alignItems: "center",
  },
  sliderStyle: {
    width: 300,
    height: 80,
  },
});
