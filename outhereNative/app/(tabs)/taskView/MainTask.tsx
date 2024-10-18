import { View, StyleSheet, Button } from "react-native";
import SuccessButton from "./SuccessButton";
import TaskImage from "./TaskImage";
import TaskText from "./TaskText";
import FailButton from "./FailButton";
import firestore from "@react-native-firebase/firestore";

const MainTask = () => {
  const fetchData = async () => {
    try {
      const dataCollection = await firestore().collection("data").get();
      dataCollection.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error("Error fetching Firestore data: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TaskImage />
      <TaskText />
      <View style={styles.buttonContainer}>
        <SuccessButton />
        <FailButton />
        <Button title="fetch data" onPress={fetchData} />
      </View>
    </View>
  );
};

export default MainTask;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    top: 200,
    borderRadius: 14,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    top: 20,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});
