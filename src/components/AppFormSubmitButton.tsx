import { useFormikContext } from "formik";
import React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent } from "react-native";


interface AppFormSubmitButtonProps {
    title: string;
}

interface IAppB {
    handleSubmit: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const  AppFormSubmitButton = ({ title }: AppFormSubmitButtonProps ): 
    JSX.Element => {
        const { handleSubmit, isValid } = useFormikContext();
        return (
            <Button
                title={title}
                // to get rid of  typing issue for OnPress.
                onPress={(handleSubmit as unknown) as (IAppB['handleSubmit'])}
                disabled={!isValid}    
            >
            </Button>
        )
} 

export default AppFormSubmitButton;