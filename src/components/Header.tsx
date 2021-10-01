import React from "react"
import { View, Text} from "react-native";
import { useMeQuery } from "../generated/graphql";


const Header: React.FC = () => {
        const {data} = useMeQuery({fetchPolicy: "network-only"});
        return (
            <View>
                    { data && data.me ? <Text>Logged in as: {data.me.email} </Text> : <Text>Not Me.</Text>}
            </View>
        );
}
export default Header;