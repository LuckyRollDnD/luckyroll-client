
import React from "react";
import { View, StyleSheet } from 'react-native';
import { colorScheme } from "../styles/colors";
import RegisterForm from "../components/RegisterForm";
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



export default function SignUpScreen({navigation}) {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.inner}>
                <RegisterForm navigation={navigation}/>
            </View>
        </View>
    )
}
