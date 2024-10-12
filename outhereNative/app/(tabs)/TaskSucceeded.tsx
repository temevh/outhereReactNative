import { View, Text, StyleSheet } from "react-native";

const TaskSucceeded = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Good job!</Text>
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
});
