import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MainTask from "@/app/(tabs)/taskView/MainTask";
import HeaderText from "@/components/HeaderText";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("../../assets/fonts/RobotoMono.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

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
