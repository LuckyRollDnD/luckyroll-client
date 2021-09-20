
import * as Yup from "yup";
import React from "react";
import { Formik, Field } from 'formik';
import { Text, View, StyleSheet } from 'react-native';

import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({

    loginContainer: {
        width: '100%',
        height: "100%",
        alignItems: 'center',
        backgroundColor: '#rgba(19, 191, 205, .7)',
    },
    inner: {
        top: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: '100%',
        height: '80%',
        padding: 10,
        borderRadius: 40,
    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "transparent",
        borderBottomColor: "#e5e5e5",
        borderRadius: 10,
    },
})


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required.")
        .label("Email"),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required")
        .label("Password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required")
        .label("Confirm Password"),

})
interface FormValues {
    email: string;
    password: string;
    confirmPassword: string
}

export default function Register() {

    const initialValues: FormValues = {
        email: "",
        password: "",
        confirmPassword: ""
    }

    return (
        <SafeAreaView style={styles.loginContainer}>
            <View style={styles.inner}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={values => console.log(values)}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <>
                            <Field
                                style={styles.textInput}
                                placeholderTextColor={styles.textInput.color}
                                component={AppFormField}
                                name="email"
                                placeholder="Email"
                                autoCompleteType="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />
                            <Field
                                component={AppFormField}
                                name="password"
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            <Field
                                component={AppFormField}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                secureTextEntry
                                textContentType="password"
                            />

                            <AppFormSubmitButton title="Submit" />
                        </>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}
