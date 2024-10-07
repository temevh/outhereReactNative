import { View, Text, StyleSheet } from "react-native";

const Button = ({ succeed }: { succeed: boolean }) => {
  const btnText = succeed ? "I DID IT!" : "NOT YET...";
  const backgroundColor = succeed ? "#184632" : "#FF0000";

  const onButtonPress = () => {
    if (succeed) {
    }
  };

  return (
    <View style={[styles.buttonStyle, { backgroundColor }]}>
      <Text style={styles.textStyle}>{btnText}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    width: 160,
    borderRadius: 14,
    backgroundColor: "#184632",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    fontFamily: "RobotoMono",
  },
});
