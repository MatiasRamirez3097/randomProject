/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import RandomNavigator from './src/navigation';

const client = new ApolloClient({
  link: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <RandomNavigator />
    </ApolloProvider>
  );
}
