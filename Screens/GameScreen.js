import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../Components/NumberContainer";
import Card from "../Components/card";
import { Button } from "react-native-web";

const generateRandamBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Matg.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandamBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandamBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonConatiner}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonConatiner: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
