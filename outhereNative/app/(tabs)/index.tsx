import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainTask from "@/components/taskView/MainTask";
import HeaderText from "../../components/HeaderText";
import useFonts from "@/hooks/useFonts";
import AppLoading from "expo-app-loading";

export default function HomeScreen() {
  const fontsLoaded = useFonts({
    RobotoMono: require("../../assets/fonts/RobotoMono.ttf"), // Adjust the path according to your project structure
  });

  /*
  if (!fontsLoaded) {
    return <AppLoading />;
  }*/

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
