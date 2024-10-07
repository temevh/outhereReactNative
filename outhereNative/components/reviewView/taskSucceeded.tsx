import { View, Text, StyleSheet } from "react-native";

const taskSucceeded = () => {
  return (
    <View>
      <Text>Great job!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "green",
  },
});

export default taskSucceeded;
