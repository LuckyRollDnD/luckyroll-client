
import * as Yup from "yup";
import React from "react";
import { Formik, Field } from 'formik';
import { Text, View, StyleSheet } from 'react-native';

import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';

const styles = StyleSheet.create({
    
    loginContainer: {
        width: '80%',
        alignItems: 'center',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
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
        .min(8, ({min}) => `Password must be at least ${min} characters`)
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
        <View style={styles.loginContainer}>
            <Text>Register</Text>
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
    )
}
