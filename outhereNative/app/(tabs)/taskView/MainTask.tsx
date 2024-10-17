import { View, StyleSheet } from "react-native";
import SuccessButton from "./SuccessButton";
import TaskImage from "./TaskImage";
import TaskText from "./TaskText";
import FailButton from "./FailButton";

const MainTask = () => {
  return (
    <View style={styles.container}>
      <TaskImage />
      <TaskText />
      <View style={styles.buttonContainer}>
        <SuccessButton />
        <FailButton />
      </View>
    </View>
  );
};

export default MainTask;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    top: 50,
    borderRadius: 14,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    top: 20,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});
