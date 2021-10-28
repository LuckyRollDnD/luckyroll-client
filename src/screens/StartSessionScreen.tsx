import React from "react"
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import { Shared } from "../styles";
import DndDice from "../assets/dnd_dice.png";
import Button from "../components/Button";

const styles = StyleSheet.create({
    container: {
        ...Shared.container,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    buttonView: {
        flex: 1,
        alignItems: "center",
    }
})

export default function StartSessionScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flex: 1,
                paddingBottom: 20,
            }}>
                <Image source={DndDice} resizeMode="contain" style={styles.image} />
            </View>
            <View style={styles.buttonView}>
                <Button navigation={navigation} text="Start New Session"/>
            </View>
        </SafeAreaView>
    );
}
