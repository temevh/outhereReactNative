import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainTask from "@/components/taskView/MainTask";
import HeaderText from "@/components/HeaderText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderText />
      <MainTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
