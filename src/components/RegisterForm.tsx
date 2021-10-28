import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field } from 'formik';
import { Text, StyleSheet } from "react-native";
import FormField from './Forms/FormField';
import { colorScheme } from "../styles/colors";
import FormButton from "./Forms/FormButton";
import { useRegisterMutation } from "../generated/graphql";
import { AppRoutes } from "../navigation/appRoutes";

const styles = StyleSheet.create({
    label: {
        color: colorScheme.darkgray,
        textAlign: "left",
        width: "90%",
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
});

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string
};

const inputs = [
    {
        component: FormField,
        name: "email",
        placeholder: "Email",
        autoCompleteType: "email",
        keyboardType: "email-address",
        textContentType: "emailAddress",
    },
    {
        component: FormField,
        name: "password",
        placeholder: "Password",
        secureTextEntry: true,
        textContentType: "password"
    },
    {
        component: FormField,
        name: "confirmPassword",
        placeholder: "Confirm Password",
        secureTextEntry: true,
        textContentType: "password"
    }
];


function RegisterForm({navigation}) {
    const [register] = useRegisterMutation();
    const [errMessage, serErrMessage] = useState("")

    const initialValues: FormValues = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    async function handleSubmit({ email, password, confirmPassword }) {

        try {
            const response = await register({
                variables: {
                    email,
                    password
                }
            });
            navigation.navigate(AppRoutes.LANDING);

        } catch (err) {
            const message = err.message;
            serErrMessage(err.message);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {(
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
            ) => (
                <>
                    {inputs.map((input, id) => (
                        <React.Fragment key={id}>
                            <Text style={styles.label}>{input.placeholder}</Text>
                            <Field
                                component={input.component}
                                name={input.name && input.name}
                                autoCompleteType={input.autoCompleteType && input.autoCompleteType}
                                keyboardType={input.keyboardType && input.keyboardType}
                                textContentType={input.textContentType && input.textContentType} secureTextEntry={input.secureTextEntry && input.secureTextEntry}
                            />
                        </React.Fragment>
                    ))}
                    <FormButton title="Register" />
                    {errMessage.length > 0 && <Text>{errMessage}</Text>}
                </>
            )}
        </Formik>
    )
}

export default RegisterForm;