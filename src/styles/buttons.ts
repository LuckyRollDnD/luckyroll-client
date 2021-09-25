import { TextStyle } from "react-native";
import { colorScheme } from "./colors";

export const base: TextStyle = {
    paddingHorizontal: 10,
    paddingVertical: 12,
    justifyContent: "center",
    borderRadius: 5,
};

export const small: TextStyle = {
    width: 75
};

export const large: TextStyle = {
    width: "90%",
    height: 50,
};

export const largeSolidRed: TextStyle = {
    ...base,
    ...large,
    backgroundColor: colorScheme.primary,

}
export const largeBorderRed: TextStyle = {
    ...base,
    ...large,
    borderColor: colorScheme.primary,
    backgroundColor: colorScheme.white,
}

export const baseButtonText: TextStyle = {
    textAlign: "center",
    fontWeight: "bold",
}
export const buttonWhiteText: TextStyle = {
    ...baseButtonText,
    color: colorScheme.white,
}

export const buttonPrimaryText: TextStyle = {
    ...baseButtonText,
    color: colorScheme.primary
}