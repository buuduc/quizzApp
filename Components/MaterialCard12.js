import React, { Component, useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScoreContext } from "../Contexts/Score";

function MaterialCard12(props) {
  const [score, addScore] = useContext(ScoreContext);
  const submitHandle = () => {
    let mark = 0;
    score.map((item) => {
      if (item.score === true) mark++;
    });

    alert(`bạn được ${mark}/${score.length} câu đã làm`);
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>{props.title}</Text>
          <Text style={styles.subtitleStyle}>{props.description}</Text>
        </View>
        <Image
          // source={require("../src/DHG.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity onPress={submitHandle} style={styles.actionButton1}>
          <Text style={styles.actionText1}>Nộp bài</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>Báo cáo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 100,
    // height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1,
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 120,
    width: 120,
    margin: 16,
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
  },
  actionButton1: {
    padding: 8,
    height: 36,
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9,
  },
  actionButton2: {
    padding: 8,
    height: 36,
  },
  actionText2: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9,
  },
});

export default MaterialCard12;
