import { View, Text, StyleSheet } from "react-native";

const TaskSucceeded = () => {
  return (
    <View style={styles.container}>
      <Text>Great job!</Text>
    </View>
  );
};

export default TaskSucceeded;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "green",
  },
});
