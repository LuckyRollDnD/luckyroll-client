import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo } from '@expo/vector-icons'; 
import { createStackNavigator } from "@react-navigation/stack";
import { colorScheme } from "../styles/colors";
import { AppRoutes } from "./appRoutes";

import SessionScreen from "../screens/SessionScreen"
import StartSessionScreen from "../screens/StartSessionScreen";


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


const SessionNavigator = () => {
    // TODO: for future of setting first route depending if session is present or not.
    const [firstRoute, setFirstRoute] = useState(AppRoutes.START_SESSION_SCREEN);

    return  (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}
    initialRouteName={firstRoute}>
        <Stack.Screen name={AppRoutes.SESSION_SCREEN} component={SessionScreen}/>
        <Stack.Screen name={AppRoutes.START_SESSION_SCREEN} component={StartSessionScreen}/>
    </Stack.Navigator>
    )
}
export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            activeColor={colorScheme.white}
            inactiveColor={colorScheme.darkgray}
            barStyle={{ backgroundColor: colorScheme.primary }}
        >
            <Tab.Screen
                name={AppRoutes.SESSION_SCREEN}
                component={SessionNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="calendar" size={24} color="black" />                    )
                }}/>

        </Tab.Navigator>
    )
}