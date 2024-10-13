import Slider from "@react-native-community/slider";
import { StyleSheet } from "react-native";

const SliderComponent = () => {
  return (
    <Slider
      style={styles.sliderStyle}
      minimumValue={0}
      maximumValue={10}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      step={1}
    />
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    width: 300,
    height: 80,
  },
});

export default SliderComponent;
