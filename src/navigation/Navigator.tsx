import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabNavigator";
import SignInPage from "../screens/SignInPage";    
import SignUpPage from "../screens/SignUpPage";
import RegistrationPage from "../screens/RegistrationPage";

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
      <Stack.Screen name={AppRoutes.LANDING} component={RegistrationPage} />
      <Stack.Screen name={AppRoutes.SIGNUP_SCREEN} component={SignUpPage} />
      <Stack.Screen name={AppRoutes.SIGNIN_SCREEN} component={SignInPage} />
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