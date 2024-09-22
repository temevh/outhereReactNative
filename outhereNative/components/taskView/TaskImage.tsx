import { View, Image, StyleSheet } from "react-native";

const TaskImage = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/reading.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default TaskImage;
