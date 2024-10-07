import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
import TaskImage from "./TaskImage";
import TaskText from "./TaskText";
import TaskSucceeded from "../reviewView/taskSucceeded";

import { useNavigation } from "@react-navigation/native";

const MainTask = () => {
  const navigation = useNavigation();

  const handlePress = (succeed: boolean) => {
    if (succeed) {
      navigation.navigate("TaskSucceeded");
    } else {
      // Handle the false case if needed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subText}>Did you succeed?</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => handlePress(true)} title="Yes" />
        <Button onPress={() => handlePress(false)} title="No" />
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
