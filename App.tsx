import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './src/screens/HomeScreen';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import { colorScheme } from "./src/styles/colors";

const cache = new InMemoryCache()

const url = 'http://localhost:4000/graphql'
const client = new ApolloClient({
  uri: url,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },

});


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer >
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
        </Stack.Navigator>
      </NavigationContainer>

    </ApolloProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
