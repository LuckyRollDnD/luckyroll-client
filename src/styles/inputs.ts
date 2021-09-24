import { TextStyle, StyleSheet } from "react-native"
import { colorScheme } from "./colors";
export const formInput: TextStyle = {
    height: 40,
    width: '90%',
    margin: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colorScheme.primary,
    color: colorScheme.primary, 
    borderRadius: 5,
}