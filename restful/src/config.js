require('dotenv').config();

exports.Service = {
  label: process.env.LABEL || 'Sample',
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 3000
};

exports.Mongo = {
  url: process.env.MONGO_URL
};
