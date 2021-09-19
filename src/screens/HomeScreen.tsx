import React from "react";
import { View, Text, Button } from "react-native";
import { useHelloQuery } from "../generated/graphql";

function HomeScreen({ navigation }) {

    const { loading, data } = useHelloQuery();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {(loading || !data) ? (
                <Text>Loading...</Text>
            ) : (
                <Text>{data.hello}</Text>
            )}
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate("Register")}
            />
        </View>
    )
}

export default HomeScreen;