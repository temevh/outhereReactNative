import { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput } from "react-native";

const TextField = () => {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    width: 260,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
  },
});

export default TextField;
