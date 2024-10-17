import React from "react";
import { View, StyleSheet } from "react-native";
import MainTask from "@/app/(tabs)/taskView/MainTask";
import HeaderText from "@/components/HeaderText";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/*<HeaderText />*/}
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
