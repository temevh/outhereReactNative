import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTask from "@/components/taskView/MainTask";
import TaskSucceeded from "@/components/reviewView/TaskSucceeded";
const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="MainTask">
    <Stack.Screen name="MainTask" component={MainTask} />
    <Stack.Screen name="TaskSucceeded" component={TaskSucceeded} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;
