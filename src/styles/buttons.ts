import { TextStyle } from "react-native";
import { colorScheme } from "./colors";

export const base: TextStyle = {
    paddingHorizontal: 10,
    paddingVertical: 12,
};

export const small: TextStyle = {
    width: 75
    
};

export const large: TextStyle = {
    width: "90%",
    height: 50,
};

export const rounded: TextStyle = {
    borderRadius: 50
};

export const smallRounded: TextStyle = {
    ...base,
    ...small,
    ...rounded
};

export const largeSolidRed: TextStyle = {
    ...large,
    backgroundColor: colorScheme.primary,
    justifyContent: "center",
    borderRadius: 5,

}

export const buttonText: TextStyle = {
    color: colorScheme.white,
    textAlign: "center",
}