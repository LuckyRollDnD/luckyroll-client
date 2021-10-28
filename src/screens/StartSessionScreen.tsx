import React from "react"
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import { Shared } from "../styles";
import DndDice from "../assets/dnd_dice.png";
import Button from "../components/Button";
import { AppRoutes } from "../navigation/appRoutes";

const styles = StyleSheet.create({
    container: {
        ...Shared.container,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    buttonView: {
        top: 50,
        flex: 1,
        alignItems: "center",
    }
})

export default function StartSessionScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonView}>
                <Button navigation={navigation} destination={AppRoutes.DICE_SCREEN} text="Start New Session" />
            </View>
            <View style={{ position: "absolute", top: 250, left: 0, right: 0, bottom: 0 }}
            >
                <Image source={DndDice} resizeMode="contain" style={styles.image} />
            </View>
        </SafeAreaView>
    );
}
