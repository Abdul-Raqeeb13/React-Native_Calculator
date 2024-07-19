import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, useWindowDimensions, ScrollView } from 'react-native';

export default function App() {
  const { width, height } = useWindowDimensions();
  const [clickvalue, setClickValue] = useState("");

  const handleButtonClick = (buttonId) => {
    setClickValue(clickvalue + buttonId);
  };

  const handleOutput = () => {
    setClickValue(eval(clickvalue).toFixed(2).toString());
  };

  const allclear = () => {
    setClickValue("");
  };

  const lastValueClear = () => {
    setClickValue(clickvalue.substring(0, clickvalue.length - 1));
  };

  const isPortrait = width < 500; // Adjust according to your breakpoints
  const buttonSize = isPortrait ? width / 5 - 15 : width / 10 - 20;
  const inputHeight = height * 0.50; // Adjust the input height as a percentage of the screen height
  const dynamicPadding = width * 0.04; // Adjust padding as a percentage of the screen width
  const dynamicMarginHorizontal = width * 0.03; // Adjust horizontal margin as a percentage of the screen width
  const dynamicMarginVertical = height * 0.01; // Adjust vertical margin as a percentage of the screen height

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.resultBox}>
          <TextInput
            value={clickvalue}
            onChangeText={setClickValue}
            editable={false}
            style={[styles.inpStyle, { height: inputHeight }]}
          />
        </View>

        <View style={[styles.btnbox, { padding: dynamicPadding }]}>
          <Pressable onPress={allclear} style={[styles.btnStyleRemove, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>C</Text>
          </Pressable>

          <Pressable onPress={lastValueClear} style={[styles.btnStyleRemove, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>DEL</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick('%')} style={[styles.btnStyleRemove, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>%</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("/")} style={[styles.btnStyle, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>/</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("7")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>7</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("8")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>8</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("9")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>9</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("*")} style={[styles.btnStyle, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>x</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("4")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>4</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("5")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>5</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("6")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>6</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("-")} style={[styles.btnStyle, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>-</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("1")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>1</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("2")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>2</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("3")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>3</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("+")} style={[styles.btnStyle, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>+</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("0")} style={[styles.btnStyleNum, styles.btnStyle0, { width: buttonSize * 2 + dynamicMarginHorizontal, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={[styles.btnTextStyle1]}>0</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(".")} style={[styles.btnStyleNum, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal + 7, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle1}>.</Text>
          </Pressable>

          <Pressable onPress={handleOutput} style={[styles.btnStyle, { width: buttonSize, height: buttonSize, marginHorizontal: dynamicMarginHorizontal, marginVertical: dynamicMarginVertical }]}>
            <Text style={styles.btnTextStyle}>=</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resultBox: {
    // backgroundColor: "#708090",
    // backgroundColor: "#71797E",
    backgroundColor: "#36454F",
  },

  inpStyle: {
    color: "white",
    textAlign: "right",
    fontSize: 50,
    textAlignVertical: "bottom",
    paddingRight: 10
    // backgroundColor: "yellow/",
  },

  btnbox: {
    flex: 1.3,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    color: "white",
    borderTopColor: "white",
    borderTopWidth: 0.3,
  },

  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "orange",
    borderRadius: 100,
  },

  btnStyleRemove: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A9A9A9",
    borderRadius: 100,
  },

  btnStyleNum: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#808080",
    borderRadius: 100,
  },

  btnTextStyle: {
    fontSize: 25,
    fontWeight: "bold",

  },

  btnTextStyle1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  btnStyle0: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: 'left',
  },
});
