import { View, Text, StyleSheet } from "react-native";
import SuccessButton from "./SuccessButton";
import TaskImage from "./TaskImage";
import TaskText from "./TaskText";
import TaskSucceeded from "../../app/(tabs)/TaskSucceeded";

const MainTask = () => {
  return (
    <View style={styles.container}>
      <TaskImage />
      <TaskText />
      <View style={styles.buttonContainer}>
        <SuccessButton succeed={true} />
        <SuccessButton succeed={false} />
      </View>
    </View>
  );
};

export default MainTask;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    top: 30,
    borderRadius: 14,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    top: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
  },
  subText: {
    color: "white",
    fontSize: 22,
    paddingTop: 20,
  },
});
