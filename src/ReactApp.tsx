import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import  DndSession  from './screens/DndSession';

import { colorScheme } from "./styles/colors";
import { useMeQuery } from './generated/graphql';


const Stack = createNativeStackNavigator();
export default function ReactApp() {
    const {data, loading} = useMeQuery();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: colorScheme.primary,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: colorScheme.white,
                },
            }}>
                {data?.me ? (
                    <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    </>
                    ): (
                        <>
                        <Stack.Screen name="LuckyRoll" component={HomeScreen} />
                        <Stack.Screen name="Session" component={DndSession} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};