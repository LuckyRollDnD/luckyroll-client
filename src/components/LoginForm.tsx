import React from "react";
import * as Yup from "yup";
import { Formik, Field } from 'formik';
import { Text, StyleSheet } from "react-native";
import FormField from './Forms/FormField';
import FormButton from './Forms/FormButton';
import { colorScheme } from "../styles/colors";

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


function LoginForm() {

    const initialValues: FormValues = {
        email: "",
        password: "",
    };

    return (
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
                </>
            )}
        </Formik>
    )
}

export default LoginForm;