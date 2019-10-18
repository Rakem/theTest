import {makeExecutableSchema, addResolveFunctionsToSchema} from 'graphql-tools';
import SchemaLink from 'apollo-link-schema';
import gql from 'graphql-tag';
import uuid from 'react-native-uuid';
import * as DATA from './data';
import SCHEMA from './schema';
import AsyncStorage from '@react-native-community/async-storage';

const DATA_KEY = '@DATA_KEY';

export function clearData(){
  AsyncStorage.removeItem(DATA_KEY);
}
function createMockServerSchema() {
  const schemaString = SCHEMA;
  const schema = gql`
    ${schemaString}
  `;
  const executableSchema = makeExecutableSchema({typeDefs: schema});

  //initial load
  AsyncStorage.getItem(DATA_KEY).then(data => {
    if (!data) {
      AsyncStorage.setItem(DATA_KEY, JSON.stringify(DATA.grades));
    }
  });

  function delay(resolver) {
    return () =>
      new Promise(resolve => setTimeout(resolve, 2000)).then(resolver);
  }

  const resolverMap = {
    Query: {
      getGrades: delay(() => {
        console.log('data fetched');
        return AsyncStorage.getItem(DATA_KEY).then(data =>
          data ? JSON.parse(data) : [],
        );
      }),
    },
    Mutation: {
      //it may not be neccessarily the best idea to login via graphql, as usually it is assumed, that the user is already part of the context
      createToken: (_, {username, password}) => {
        if (username === 'user' && password === 'password') {
          return {token: 'I am a super secure token'}; //React native does not support built in node modules. most jwt libs depend on them
        } else {
          throw new Error('Invalid Credentials');
        }
      },
      createGrade: (_, {grade}) => {
        AsyncStorage.getItem(DATA_KEY).then(data => {
          const parsedData = JSON.parse(data);
          grade.id = uuid.v4();
          return AsyncStorage.setItem(
            DATA_KEY,
            JSON.stringify([...parsedData, grade]),
          );
        });
      },
    },
  };

  addResolveFunctionsToSchema({
    schema: executableSchema,
    resolvers: resolverMap,
  });
  return new SchemaLink({schema: executableSchema});
}

export default createMockServerSchema;
