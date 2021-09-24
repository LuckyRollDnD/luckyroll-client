import { useFormikContext } from "formik";
import React from "react";
import { TouchableOpacity, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, Text } from "react-native";
import { Buttons } from "../styles";
import {  largeSolidRed } from "../styles/buttons";
import { colorScheme } from "../styles/colors";

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        ...Buttons.largeSolidRed,
    },
    text: {
        ...Buttons.buttonText,
    }
})

interface IProps {
    title: string;
}

interface IAppB {
    handleSubmit: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const AppFormSubmitButton = ({ title }: IProps) => {
    const { handleSubmit, isValid } = useFormikContext();
    return (
        <TouchableOpacity
            style={styles.button}
            // to get rid of  typing issue for OnPress.
            onPress={(handleSubmit as unknown) as (IAppB['handleSubmit'])}
            disabled={!isValid}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppFormSubmitButton;
