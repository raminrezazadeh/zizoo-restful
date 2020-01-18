const express = require('express');
const cookieParser = require('cookie-parser');
const config = require('./config');
const boatRouter = require('./routes/boat');


const app = express();

const onListening = () => {
  console.log(`Service ${config.Service.label} started, listening on port ${config.Service.port}`);
};

const onError = (error) => {
  console.log(error.message);
};

const onShutdown = () => {
  server.close();
  process.nextTick(() => {
    console.log(`Service ${config.Service.label} terminated`);
    process.exit(0);
  })
};

const createServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/boats', boatRouter);
  return app.listen(config.Service.port, config.Service.host)
};

const server = createServer();
server.on('error', onError);
server.on('listening', onListening);
process.on('SIGINT', onShutdown);
