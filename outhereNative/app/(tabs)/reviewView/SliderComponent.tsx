import Slider from "@react-native-community/slider";
import { Text, StyleSheet, View } from "react-native";

interface SliderComponentProps {
  header: string;
}

const SliderComponent = ({ header }: SliderComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{header}</Text>
      <Slider
        style={styles.sliderStyle}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    width: 300,
    height: 60,
  },
  container: {
    alignItems: "center",
    width: "80%",
  },
  headerStyle: {
    color: "white",
    fontSize: 26,
  },
});

export default SliderComponent;
