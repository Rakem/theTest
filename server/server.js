import {makeExecutableSchema, addResolveFunctionsToSchema} from 'graphql-tools';
import SchemaLink from 'apollo-link-schema';
import gql from 'graphql-tag';

import * as DATA from './data';
import SCHEMA from './schema';
function createMockServerSchema() {
  const schemaString = SCHEMA;
  const schema = gql`
    ${schemaString}
  `;
  const executableSchema = makeExecutableSchema({typeDefs: schema});

  function delay(resolver) {
    return () => new Promise(resolve => setTimeout(resolve, 2000)).then(resolver);
  }

  const resolverMap = {
    Query: {
      getGrades: delay(() => {
        console.log('data fetched');
        return DATA.grades;
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
    },
  };

  addResolveFunctionsToSchema({
    schema: executableSchema,
    resolvers: resolverMap,
  });
  return new SchemaLink({schema: executableSchema});
}

export default createMockServerSchema;
