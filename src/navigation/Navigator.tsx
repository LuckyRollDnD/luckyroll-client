import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabNavigator";
import SignInScreen from "../screens/SignInScreen";    
import SignUpScreen from "../screens/SignUpScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

import { colorScheme } from "../styles/colors";
import { AppRoutes } from "./appRoutes";
import { useMeQuery } from "../generated/graphql";

const Stack = createStackNavigator();


const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoutes.LANDING}
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
            backgroundColor: colorScheme.primary,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colorScheme.white,
        },
      }}
    >
      <Stack.Screen name={AppRoutes.LANDING} component={RegistrationScreen} />
      <Stack.Screen name={AppRoutes.SIGNUP_SCREEN} component={SignUpScreen} />
      <Stack.Screen name={AppRoutes.SIGNIN_SCREEN} component={SignInScreen} />
    </Stack.Navigator>
  )
}


const  Navigator = () => {
  const {data, loading} = useMeQuery();
  console.log({data})
  return (
    <NavigationContainer>
      {data?.me ?  <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}
export default Navigator;