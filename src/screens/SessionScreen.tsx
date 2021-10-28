import React from "react"
import { Text, View, StyleSheet } from "react-native";
import { Shared } from "../styles";

const styles = StyleSheet.create({
    container: {
        ...Shared.container
    }
})

export default function SessionScreen(){
        return (
            <View style={styles.container}>
                <Text>DndSession!</Text>
            </View>
        );
}
