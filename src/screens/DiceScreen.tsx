import React from "react"
import { Text, View, StyleSheet } from "react-native";
import { Shared } from "../styles";

const styles = StyleSheet.create({
    container: {
        ...Shared.container
    }
})

export default function DiceScreen(){
        return (
            <View style={styles.container}>
                <Text>Dice Screen!</Text>
            </View>
        );
}
