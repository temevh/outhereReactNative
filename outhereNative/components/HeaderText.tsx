import { View, Text, StyleSheet } from "react-native";

const HeaderText = () => {
  return <Text style={styles.textStyle}>outhere</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
});

export default HeaderText;
