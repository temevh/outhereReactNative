import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const FailButton = () => {
  const router = useRouter();

  const handlePress = () => {
    console.log("fail");
    router.push("/(tabs)/reviewView/TaskFailed");
  };
  return (
    <TouchableOpacity style={[styles.buttonStyle]} onPress={handlePress}>
      <Text style={styles.textStyle}>Not yet...</Text>
    </TouchableOpacity>
  );
};

export default FailButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    width: 160,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f14722",
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 28,
    fontFamily: "RobotoMono",
  },
});
