
import * as Yup from "yup";
import React from "react";
import { Formik, Field } from 'formik';
import { Text, View, StyleSheet } from 'react-native';
import AppFormField from '../components/AppFormField';
import AppFormSubmitButton from '../components/AppFormSubmitButton';
import { Inputs } from "../styles";
import { colorScheme } from "../styles/colors";
const styles = StyleSheet.create({

    loginContainer: {
        flex: 1,
        backgroundColor: colorScheme.primary,
        alignItems: "center",
    },
    inner: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorScheme.white,
        width: 300,
        marginVertical: 40,
        borderRadius: 20,
        padding: 10,
        flex: 1,
    },

    label: {
        color: colorScheme.grey,
        textAlign: "left",
        width: "90%",
    }
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

const inputs = [
    {
        component: AppFormField,
        name: "email",
        placeholder: "Email",
        autoCompleteType: "email",
        keyboardType: "email-address",
        textContentType: "emailAddress",
    },
    {
        component: AppFormField,
        name: "password",
        placeholder: "Password",
        secureTextEntry: true,
        textContentType: "password"
    },
    {
        component: AppFormField,
        name: "confirmPassword",
        placeholder: "Confirm Password",
        secureTextEntry: true,
        textContentType: "password"
    }
];


export default function Register() {

    const initialValues: FormValues = {
        email: "",
        password: "",
        confirmPassword: ""
    }

    return (
        <View style={styles.loginContainer}>

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
                            {inputs.map((input, id) => (
                                <>
                                    <Text key={id} style={styles.label}>{input.placeholder}</Text>
                                    <Field
                                        key={input.name}
                                        component={input.component}
                                        name={input.name && input.name}
                                        autoCompleteType={input.autoCompleteType && input.autoCompleteType}
                                        keyboardType={input.keyboardType && input.keyboardType}
                                        textContentType={input.textContentType && input.textContentType} secureTextEntry={input.secureTextEntry && input.secureTextEntry}

                                    />
                                </>
                            ))}

                            <AppFormSubmitButton title="Submit" />
                        </>
                    )}
                </Formik>
            </View>
        </View>
    )
}
