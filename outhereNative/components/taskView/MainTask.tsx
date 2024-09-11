import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

const MainTask = () => {
  return (
    <View style={styles.container}>
      <Text>Main task here</Text>
      <View style={styles.buttonContainer}>
        <Button succeed={true} />
        <Button succeed={false} />
      </View>
    </View>
  );
};

export default MainTask;

const styles = StyleSheet.create({
  container: {
    height: 550,
    width: 350,
    top: 30,
    borderRadius: 14,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    top: 310,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
  },
});
