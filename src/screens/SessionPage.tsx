import React from "react"
import { Text, View, StyleSheet } from "react-native";
import { Shared } from "../styles";

const styles = StyleSheet.create({
    container: {
        ...Shared.container
    }
})
interface IProps {

}

export default function SessionPage(){
        return (
            <View>
                <Text>DndSession!</Text>
            </View>
        );
}
