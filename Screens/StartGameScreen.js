import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import Card from "../Components/card";
import Colors from "../Constants/Colors";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";

const StartGameScreen = (props) => {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (number) => {
    setNumber(number);
  };

  const resetInputHandler = () => {
    setNumber("");
    setConfirmed(false);
    setNumber("");
  };

  const confirmInputHandler = () => {
    console.log(number);
    setConfirmed(true);
    setSelectedNumber(number);
    setNumber("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={number}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button
              title="reset"
              onPress={resetInputHandler}
              color={Colors.accent}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={Colors.primary}
            />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  btn: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
