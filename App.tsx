import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { setAccessToken } from "./src/utils/accessToken";
import { client } from './src/utils/apolloClient';
import ReactApp from './src/ReactApp';




export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include"
    }).then(async x => {
      const { accessToken } = await x.json();
      console.log({accessToken});
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Text>Loading...</Text>
    )
  }
  return (
    <ApolloProvider client={client}>
      <ReactApp />
    </ApolloProvider>
  );
}


