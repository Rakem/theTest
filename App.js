/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './Navigation';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import createMockServerSchema from './server/server';
const cache = new InMemoryCache();

const link = createMockServerSchema();

const client = new ApolloClient({
  link,
  cache,
});

const App: () => React$Node = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
