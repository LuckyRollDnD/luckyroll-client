import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field } from 'formik';
import { Text, StyleSheet } from "react-native";
import FormField from './Forms/FormField';
import FormButton from './Forms/FormButton';
import { colorScheme } from "../styles/colors";
import { useLoginMutation } from "../generated/graphql";
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
        .required("Password is required")
        .label("Password"),
});

interface FormValues {
    email: string;
    password: string;
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
];


function LoginForm({navigation}) {
    const [login] = useLoginMutation();
    const [errMessage, setErrMessage] = useState("")

    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    async function handleLogin({email, password}) {
        try {
            const response = await login({
                variables: {
                    email,
                    password
                }
            })
            console.log({response});
            navigation.navigate(AppRoutes.START_SESSION_SCREEN);

        } catch(err) {
            setErrMessage(err.message);
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}>
            {(
                handleSubmit,
                isValid
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
                    <FormButton title="Login" />
                    <Text>{errMessage && errMessage}</Text>
                </>
            )}
        </Formik>
    )
}

export default LoginForm;