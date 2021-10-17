import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo } from '@expo/vector-icons'; 
// import { createStackNavigator } from "@react-navigation/stack";
import { colorScheme } from "../styles/colors";

import SessionPage from "../screens/SessionPage"
import { AppRoutes } from "./appRoutes";


const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            activeColor={colorScheme.white}
            inactiveColor={colorScheme.darkgray}
            barStyle={{ backgroundColor: colorScheme.primary }}
        >
            <Tab.Screen
                name={AppRoutes.SESSION_SCREEN}
                component={SessionPage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="calendar" size={24} color="black" />                    )
                }}/>

        </Tab.Navigator>
    )
}