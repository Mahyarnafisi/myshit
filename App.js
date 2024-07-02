import { useState } from "react";
import { Alert, Button, FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import image from "./assets/google-pixel-8-pro-3840x2160-14500.jpg";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [data, setData] = useState([]);
  const [modalIsShow, setModalIsShow] = useState(false);

  const removeItemFromListHandler = (id) => {
    console.log(id);
    setData((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  };
  const addButtonHandler = (textInputValue) => {
    if (textInputValue) {
      setData((prevData) => {
        return [{ id: data?.length + 1, value: textInputValue }, ...prevData];
      });
    }
    if (!textInputValue) {
      Alert.alert("Please enter a goal!");
    }
    return;
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <ImageBackground blurRadius={50} style={styles.imageBg} source={image} resizeMode="cover">
          <GoalInput data={data} onPress={addButtonHandler} visibility={modalIsShow} closeModal={setModalIsShow} />
          <View style={styles.list}>
            <Text style={styles.dataNum}>{data?.length === 0 ? "You have not add any goal." : `You have add ${data?.length} goal${data?.length > 1 ? "s" : ""} in the list.`}</Text>
            <FlatList
              data={data}
              renderItem={(data) => {
                return <GoalItem data={data} onPress={removeItemFromListHandler} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Button color="#222222" onPress={() => setModalIsShow(true)} title="Add a new goal" />
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
  },

  list: {
    width: "100%",
    flex: 8,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  dataNum: {
    color: "#222222",
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#ffffff50",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
  },
});
