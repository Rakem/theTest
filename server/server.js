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

  const resolverMap = {
    Query: {
      getGrades: () => {
        return DATA.grades;
      },
    },
    Mutation: {
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
