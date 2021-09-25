import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import DndDice from "../assets/dnd_dice.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorScheme } from "../styles/colors";
import { Buttons } from "../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colorScheme.primary,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    registerButton: {
        ...Buttons.largeBorderRed,
        marginVertical: 10,
        color: colorScheme.primary,
        borderColor: colorScheme.primary,
        borderWidth: 1,
    },
    loginButton: {
        ...Buttons.largeSolidRed,
        marginTop: 40,
        marginBottom: 20,
    },
    registerText: {
        ...Buttons.buttonPrimaryText,
    },
    loginText: {
        ...Buttons.buttonWhiteText,
    }

})


function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flex: 1,
                paddingBottom: 20,
            }}>
                <Image source={DndDice} resizeMode="contain" style={styles.image}  />
            </View>
            <View style={{
                flex: 2,
                backgroundColor: colorScheme.white,
                alignItems: "center",
            }}>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.registerText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;
