
import { ViewStyle } from "react-native";
import  { colorScheme } from "./colors";
import { boxShadow } from "./shared";

export const formContainer: ViewStyle  = {
    ...boxShadow,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorScheme.white,
    width: 300,
    marginVertical: 40,
    borderRadius: 20,
    padding: 10,
    flex: 1,
}

