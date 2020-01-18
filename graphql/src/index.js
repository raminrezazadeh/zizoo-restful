const { ApolloServer } = require('apollo-server');
const config = require('./config');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const BoatAPI = require('./datasources/boat');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    boatAPI: new BoatAPI()
  })
});

server.listen({ port: config.Service.port, host: config.Service.host }).then(({ url }) => {
  console.log(`Server ${config.Service.label} ready at ${url}`);
});
