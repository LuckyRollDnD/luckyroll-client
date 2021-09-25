
import React from "react";
import { View, StyleSheet } from 'react-native';
import { colorScheme } from "../styles/colors";
import LoginForm from "../components/LoginForm";
import { Forms } from "../styles";

const styles = StyleSheet.create({

    loginContainer: {
        flex: 1,
        backgroundColor: colorScheme.primary,
        alignItems: "center",
    },
    inner: {
        ...Forms.formContainer
    },
})



export default function Login() {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.inner}>
                <LoginForm />
            </View>
        </View>
    )
}
