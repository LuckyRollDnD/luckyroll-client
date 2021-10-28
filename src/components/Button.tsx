import React from "react"
import { Text,TouchableOpacity, StyleSheet } from "react-native";
import { Buttons } from "../styles";

const styles = StyleSheet.create({
  button: {
    ...Buttons.largeSolidRed,
    marginTop: 40,
    marginBottom: 20,
  },
  text: {
    ...Buttons.buttonWhiteText,
  },

})


const Button = ({navigation, text, destination}) => {
  console.log({destination});
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(destination)}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
export default Button;