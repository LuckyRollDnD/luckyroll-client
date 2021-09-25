import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import  DndSession  from './screens/DndSession';

import { colorScheme } from "./styles/colors";


const Stack = createNativeStackNavigator();

export default function ReactApp() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LuckyRoll" screenOptions={{
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: colorScheme.primary,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colorScheme.white,
                },
            }}>
                <Stack.Screen name="LuckyRoll" component={HomeScreen} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Session" component={DndSession} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};