import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ data, onPress }) {
  const removeItemFromListHandler = (id) => {
    onPress(id);
  };
  return (
    <View style={styles.listItem}>
      <Text style={styles.textItemValue}>{data.item.value}</Text>
      <Pressable
        android_ripple={{ color: "#606c3850" }}
        style={({ pressed }) => (pressed ? styles.pressBtn : styles.removeBtn)}
        onPress={() => removeItemFromListHandler(data?.item.id)}
      >
        <Text>✖️</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    borderRadius: 8,
    fontWeight: "600",
    backgroundColor: "white",
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    height: 60,
  },
  textItemValue: {
    color: "#333333",
    fontWeight: "500",
    fontSize: 20,
  },
  removeBtn: {
    height: "100%",
    borderLeftWidth: 1,
    borderLeftColor: "#cccccc",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pressBtn: {
    backgroundColor: "#606c3810",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#606c3810",
  },
});
