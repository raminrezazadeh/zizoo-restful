const express = require('express');
const cookieParser = require('cookie-parser');
const config = require('./config');
const mongo = require('./dependencies/mongo');
const boatRouter = require('./routes/boat');


const app = express();

const onListening = () => {
  console.log(`Service ${config.Service.label} started, listening on port ${config.Service.port}`);
  mongo.connect(config);
};

const onError = (error) => {
  console.log(error.message);
};

const onShutdown = () => {
  mongo.disconnect();
  server.close();
  process.nextTick(() => {
    console.log(`Service ${config.Service.label} terminated`);
    process.exit(0);
  })
};

const handleError = (error, request, response, next) => {
  if (error) {
    return response
      .status(error.status || 500)
      .json({
        httpStatus: error.status || 500,
        message: error.message
      });
  }
  next(error);
};

const createServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/boats', boatRouter);
  app.use(handleError);
  return app.listen(config.Service.port, config.Service.host)
};

const server = createServer();
server.on('error', onError);
server.on('listening', onListening);
process.on('SIGINT', onShutdown);
module.exports = server;
