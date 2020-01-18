const mongoose = require('mongoose');

const onConnect = () => {
  console.log(`Mongo connected.`)
};

const onError = (error) => {
  console.log(`Mongo error: `, error.message);
};

const onDisconnected = () => {
  console.log(`Mongo disconnected.`)
};

const onOpen = () => {
  console.log(`Mongo Opened.`)
};

exports.connect = (config) => {
  mongoose.connect(config.Mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  mongoose.connection.on('connected', onConnect);
  mongoose.connection.on('error', onError);
  mongoose.connection.on('disconnected', onDisconnected);
  mongoose.connection.on('open', onOpen);
};

exports.disconnect = () => {
  mongoose.connection.close()
};
