import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainTask from "@/components/taskView/MainTask";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MainTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
  },
});
