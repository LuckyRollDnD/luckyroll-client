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

const DndSession: React.FC<IProps> = () => {
        return (
            <View>
                <Text>DndSession!</Text>
            </View>
        );
}

export default DndSession;