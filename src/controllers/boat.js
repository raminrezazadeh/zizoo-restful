module.exports.list = async (request, response) => {
  return response.json({test: 'list'});
};

module.exports.find = async (request, response) => {
  return response.json({test: 'find'});
};

module.exports.update = async (request, response) => {
  return response.json({test: 'update'});
};

module.exports.remove = async (request, response) => {
  return response.json({test: 'remove'});
};

module.exports.create = async (request, response) => {
  return response.json({test: 'create'});
};
