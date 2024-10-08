import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const SuccessButton = ({ succeed }: { succeed: boolean }) => {
  const btnText = succeed ? "I DID IT!" : "NOT YET...";
  const backgroundColor = succeed ? "#184632" : "#FF0000";

  const handlePress = () => {
    if (succeed) {
      <Link href={"/(tabs)\reviewViewTaskSucceeded"} />;
    } else {
      // Handle the false case if needed
    }
  };

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor }]}
      onPress={handlePress}
    >
      <Text style={styles.textStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default SuccessButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    width: 160,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    fontFamily: "RobotoMono",
  },
});
