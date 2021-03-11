import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { ScoreContext } from "../Contexts/Score";
export default function QuestCard(props) {
  const [value, setValue] = React.useState();
  const [score, addScore] = useContext(ScoreContext);

  const handlerValue = (newvalue) => {
    console.log(score);
    if (newvalue === props.trueQuest.toString()) {
      addScore({ id: props.id, score: true });
    } else {
      addScore({ id: props.id, score: false });
    }
  };

  return (
    <RadioButton.Group
      onValueChange={(newValue) => {
        handlerValue(newValue);
        setValue(newValue);
      }}
      value={value}
      style={styles.container}
    >
      <View>
        <Text style={styles.threads}>{props.thread}</Text>
      </View>

      <View style={styles.viewDescription}>
        <RadioButton value="1" />
        <Text style={styles.description}>{props.quest1}</Text>
      </View>
      <View style={styles.viewDescription}>
        <RadioButton value="2" />
        <Text style={styles.description}>{props.quest2}</Text>
      </View>
      <View style={styles.viewDescription}>
        <RadioButton value="3" />
        <Text style={styles.description}>{props.quest3}</Text>
      </View>
      <View style={styles.viewDescription}>
        <RadioButton value="4" />
        <Text style={styles.description}>{props.quest4}</Text>
      </View>
    </RadioButton.Group>
  );
}

const styles = StyleSheet.create({
  threads: {
    flexWrap: "wrap",
  },
  viewDescription: {
    flexDirection: "row",
  },
  alphabet: {
    flex: 1,
    margin: 1,
    paddingLeft: 20,
  },
  description: {
    flex: 8,
    margin: 1,
    paddingTop: 5,
    flexWrap: "wrap",
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
