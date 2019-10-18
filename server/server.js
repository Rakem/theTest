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
  };

  addResolveFunctionsToSchema({
    schema: executableSchema,
    resolvers: resolverMap,
  });
  return new SchemaLink({schema: executableSchema});
}

export default createMockServerSchema;
