import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import QuestCard from "./Components/QuestCard";
import axios from "axios";
import { set } from "react-native-reanimated";
export default function App() {
  let stt = 1;
  const [data, setData] = useState([]);
  const [score, setScore] = useState();
  scoreHandle = (result) => {
    setData((prevScore) => [
      ...prevScore,
      { id: Math.random().toString(), result: result },
    ]);
    console.log(score);
  };
  useEffect(() => {
    axios
      .get("https://603f0302d952850017603d75.mockapi.io/quizz")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <View style={styles.container}>
      {/* <FlatList
        style={styles.flatList}
        // numColumns={2}
        data={data}
        keyExtractor={(itemData) => (stt++).toString()}
        renderItem={(itemData) => {
          return (
            <QuestCard
              thread={itemData.item.thread}
              quest1={itemData.item.quest1}
              quest2={itemData.item.quest2}
              quest3={itemData.item.quest3}
              quest4={itemData.item.quest4}
              trueQuest={(itemData.item.trueQuest % 4) + 1}
            ></QuestCard>
          );
        }}
      /> */}
      <ScrollView>
        {data.map((itemData) => {
          return (
            <QuestCard
              showResult={scoreHandle.bind}
              thread={itemData.thread}
              quest1={itemData.quest1}
              quest2={itemData.quest2}
              quest3={itemData.quest3}
              quest4={itemData.quest4}
              trueQuest={(itemData.trueQuest % 4) + 1}
            ></QuestCard>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
