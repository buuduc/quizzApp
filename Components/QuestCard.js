import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function QuestCard(props) {
  const [value, setValue] = React.useState();

  const handlerValue = (newvalue) => {
    // console.log(props.trueQuest);
    if (newvalue === props.trueQuest.toString()) {
      // console.log(true);
      props.showResult(true);
    } else {
      props.showResult(false);
      // console.log(false);
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
