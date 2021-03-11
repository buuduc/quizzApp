import React from "react";
export const ScoreContext = React.createContext();
export function ScoreProvider(props) {
  [score, setScore] = React.useState([]);
  const addToScore = (product) => {
    const a = replace(product, score);
    console.log("a,: ", a);
    // setScore((prevScore) => [...prevScore, product]);
    setScore(a);
  };

  const replace = (object, list) => {
    let newList = [];
    if (list.findIndex((item) => item.id === object.id) === -1) {
      newList = score;
      newList.push(object);
      return newList;
    }
    list.forEach((item) => {
      if (item.id === object.id) {
        newList.push(object);
      } else {
        newList.push(item);
      }
    });
    return newList;
  };

  return (
    <ScoreContext.Provider value={[score, addToScore]}>
      {props.children}
    </ScoreContext.Provider>
  );
}
