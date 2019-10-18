/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

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

AppRegistry.registerComponent(appName, () => App);
