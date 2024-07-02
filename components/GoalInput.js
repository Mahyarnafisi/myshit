import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ data, onPress, visibility, closeModal }) {
  const [textInputValue, setTextInputValue] = useState("");

  const addButtonHandler = () => {
    onPress(textInputValue);
    setTextInputValue("");
    closeModal(false);
  };

  return (
    <Modal style={styles.modalContainer} visible={visibility} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput onChangeText={setTextInputValue} defaultValue={textInputValue} placeholderTextColor="#999999" style={styles.textInput} placeholder="Your main goal!" />
        <Button onPress={addButtonHandler} color="#222222" title="add to the list" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flex: 2,
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  newGoalTag: {
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontWeight: "500",
    flex: 1,
    fontSize: 16,
  },
  textInput: {
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 36,
    fontWeight: "500",
    color: "#222222",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
});
