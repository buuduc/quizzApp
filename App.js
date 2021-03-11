import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import QuestCard from "./Components/QuestCard";
import axios from "axios";
import { ScoreProvider, ScoreContext } from "./Contexts/Score";
import MaterialCard12 from "./Components/MaterialCard12";
export default function App() {
  let stt = 1;
  const [data, setData] = useState([]);
  // const [score, addScore] = useContext(ScoreContext);
  // const scoreHandle = (result) => {
  //   setData((prevScore) => [
  //     ...prevScore,
  //     { id: Math.random().toString(), result: result },
  //   ]);
  //   console.log(score);
  // };
  const MarkHandle = () => {
    let mark = 0;
    // score.map((item) => {
    //   if (item.score == true) {
    //     mark += 1;
    //   }
    // });
  };
  useEffect(() => {
    axios
      .get("https://aqueous-beach-27064.herokuapp.com/offices")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <ScoreProvider>
      <View style={styles.container}>
        <ScrollView>
          <MaterialCard12 title="bai thi" description="bai thi thu" />
          {data.map((itemData) => {
            return (
              <QuestCard
                key={itemData.ID}
                id={itemData.ID}
                thread={itemData.thread}
                quest1={itemData.quest1}
                quest2={itemData.quest2}
                quest3={itemData.quest3}
                quest4={itemData.quest4}
                trueQuest={(parseInt(itemData.truequest) % 4) + 1}
              ></QuestCard>
            );
          })}
          <Button title="Chấm điẻm" onClick={MarkHandle} />
        </ScrollView>
      </View>
    </ScoreProvider>
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
``;
