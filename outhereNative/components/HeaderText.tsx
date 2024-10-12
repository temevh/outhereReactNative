import { Text, StyleSheet } from "react-native";

const HeaderText = () => {
  return <Text style={styles.textStyle}>outhere</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 100,
    fontFamily: "RobotoMono",
  },
});

export default HeaderText;
