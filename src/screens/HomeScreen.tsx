import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import { useHelloQuery } from "../generated/graphql";
import DndDice from "../assets/dnd_dice.png";
import { colorScheme } from "../styles/colors";

const styles = StyleSheet.create({

    image: {
        backgroundColor: colorScheme.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }
})

function HomeScreen({ navigation }) {

    const { loading, data } = useHelloQuery();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={DndDice} resizeMode="cover" style={styles.image}>

            {(loading || !data) ? (
                <Text>Loading...</Text>
            ) : (
                <Text>{data.hello}</Text>
            )}
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate("Register")}
            />
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;
