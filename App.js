import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Pressable, TextInput } from 'react-native'

export default function App() {

  const [clickvalue, setClickValue] = useState("")

  const handleButtonClick = (buttonId) => {
    console.log(buttonId);
    setClickValue(clickvalue + buttonId)
  }

  const handleOutput = () => {
    console.log(clickvalue);
    setClickValue(eval(clickvalue).toFixed(2).toString())
  }

  const allclear = () => {
    setClickValue("")
  }

  const lastValueClear = () => {
    setClickValue(clickvalue.substring(0, clickvalue.length - 1));
  }

  return (
    <>
      <View style={styles.conainer}>
        <View style={styles.resultBox}>
          <TextInput value={clickvalue}
            onChangeText={setClickValue} editable={false} style={styles.inpStyle} />
        </View>

        <View style={styles.btnbox}>
          <Pressable onPress={() => allclear()} style={styles.btnStyleRemove}>
            <Text style={styles.btnTextStyle}>C</Text>
          </Pressable>

          <Pressable onPress={() => lastValueClear()} style={styles.btnStyleRemove}>
            <Text style={styles.btnTextStyle}>DEL</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("%")} style={styles.btnStyleRemove}>
            <Text style={styles.btnTextStyle}>%</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("/")} style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>/</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("7")} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>7</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("8")} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>8</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("9")} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>9</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("*")} style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>x</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(4)} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>4</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(5)} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>5</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(6)} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>6</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("-")} style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>-</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(1)} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>1</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(2)} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>2</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(3)} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>3</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick("+")} style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>+</Text>
          </Pressable>

          <Pressable onPress={() => handleButtonClick(0)} style={[styles.btnStyleNum, styles.btnStyle0]}>
            <Text style={[styles.btnTextStyle1]}>0</Text>
          </Pressable>

          {/* <Pressable onPress={() => handleButtonClick("00")} style = {styles.btnStyleNum}>
            <Text style = {styles.btnTextStyle1}>00</Text>
          </Pressable> */}

          <Pressable onPress={() => handleButtonClick(".")} style={styles.btnStyleNum}>
            <Text style={styles.btnTextStyle1}>.</Text>
          </Pressable>

          <Pressable onPress={() => handleOutput()} style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>=</Text>
          </Pressable>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  conainer: {
    flex: 1
  },

  resultBox: {
    flex: 1,
    backgroundColor: "black",
  },

  inpStyle: {
    height: 195,
    color: "white",
    textAlign: "right",
    fontSize: 50,
    textAlignVertical: "bottom",
  },

  btnbox: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    color: "white",
    padding: 15,
  },


  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "orange",
    width: 65,
    height: 65,
    borderRadius: 100,
    marginHorizontal: 8.7,
    marginVertical: 6.2
  },

  btnStyleRemove: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A9A9A9",
    width: 65,
    height: 65,
    borderRadius: 100,
    marginHorizontal: 8.7,
    marginVertical: 6.2
  },

  btnStyleNum: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#808080",
    width: 65,
    height: 65,
    borderRadius: 100,
    marginHorizontal: 8.7,
    marginVertical: 6.2
  },

  btnTextStyle: {
    fontSize: 25,
  },

  btnTextStyle1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },

  btnStyle0: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    width: 146,
    textAlign: 'left',
  }

})
