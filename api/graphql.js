const { ApolloServer } = require('@apollo/server');
const { startServerAndCreateHandler } = require('@as-integrations/vercel');
const { gql } = require('graphql-tag');

// Define the schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo Server!',
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Export the Vercel-compatible handler
module.exports = startServerAndCreateHandler(server);