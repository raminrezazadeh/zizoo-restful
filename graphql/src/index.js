const { ApolloServer } = require('apollo-server');
const config = require('./config');
const typeDefs = require('./schema');


const server = new ApolloServer({
  typeDefs
});

server.listen({ port: config.Service.port, host: config.Service.host }).then(({ url }) => {
  console.log(`Server ${config.Service.label} ready at ${url}`);
});
