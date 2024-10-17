import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

interface SliderComponentProps {
  header: string;
  onValueChange: (field: string, value: number) => void;
  field: string;
}

const SliderComponent = ({
  header,
  onValueChange,
  field,
}: SliderComponentProps) => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleValueChange = (value: number) => {
    setSliderValue(value);
    onValueChange(field, value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{header}</Text>
      <View style={styles.sliderRow}>
        <Slider
          style={styles.sliderStyle}
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={handleValueChange}
          thumbTintColor="lightgreen"
        />
        <Text style={styles.valueStyle}>{sliderValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    width: 260,
    height: 60,
    color: "white",
  },
  container: {
    alignItems: "center",
    width: "90%",
  },
  headerStyle: {
    color: "white",
    fontSize: 26,
    marginBottom: 20,
  },
  valueStyle: {
    color: "white",
    fontSize: 22,
    marginLeft: 10,
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SliderComponent;
