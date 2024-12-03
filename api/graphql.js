const { ApolloServer } = require('@apollo/server');
const { startServerAndCreateHandler } = require('@as-integrations/vercel');
const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo Server!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = startServerAndCreateHandler(server);