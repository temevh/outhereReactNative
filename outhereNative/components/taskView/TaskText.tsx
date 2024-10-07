import { View, Text, StyleSheet } from "react-native";

const TaskText = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>Daily task {formattedDate}</Text>
      <Text style={styles.taskText}>Read a book for 15 minutes</Text>
      <Text style={styles.categoryText}>Education</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 350,
    borderRadius: 14,
    backgroundColor: "#595151",
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontSize: 24,
    color: "white",
    opacity: 0.6,
  },
  taskText: {
    fontSize: 32,
    color: "white",
    paddingBottom: 20,
    textAlign: "center",
  },
  categoryText: {
    fontSize: 20,
    color: "white",
    opacity: 0.6,
  },
});

export default TaskText;
