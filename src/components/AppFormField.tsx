import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { Inputs } from "../styles";

export default function AppFormField(props: any) {
    const {
        placeholder,
        field: { name, onBlur, onChange, value},
        form: {errors, touched, setFieldTouched},
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];

    const styles = StyleSheet.create({
        textInput: {
            ...Inputs.formInput,
        },
    })
    return (
        <>
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={text => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name);
                    onBlur(name);
               }}
               autoCapitalize="none"
               autoCorrect={false}
               value={value}
               {...inputProps}
            />
            <Text style={{color: "red", height: 25}}>{hasError && errors[name]}</Text>
        </>
    )
};
