import React from "react"
import { Text,TouchableOpacity, StyleSheet } from "react-native";
import { AppRoutes } from "src/navigation/appRoutes";
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


const Button = ({navigation, text}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("Weoclome!")}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
export default Button;