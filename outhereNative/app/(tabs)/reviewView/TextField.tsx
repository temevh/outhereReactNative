import { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

const TextField = ({ header }) => {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{header}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 120,
    width: 300,
    margin: 12,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    borderRadius: 14,
    color: "white",
    fontSize: 14,
  },
  questionText: {
    fontSize: 26,
    color: "white",
    width: 260,
    textAlign: "center",
  },
  container: {
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TextField;
