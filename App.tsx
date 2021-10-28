import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { setAccessToken } from "./src/lib/accessToken";
import { client } from './src/lib/apolloClient';
import Navigator from  "./src/navigation/Navigator";

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
      <Navigator />
    </ApolloProvider>
  );
}


