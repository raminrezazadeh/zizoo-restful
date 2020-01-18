const BoatService = require('../services/boat');

module.exports.list = async (request, response) => {
  const { active = null } = request.query;
  const boats = await BoatService.getAll(active);
  return response.json({test: boats});
};

module.exports.find = async (request, response) => {
  const { id } = request.params;
  const boat = await BoatService.findById(id);
  return response.json({test: boat});
};

module.exports.update = async (request, response) => {
  const { id } = request.params;
  const {name, type, year, marina, skipper, active, cabins, length, price} = request.body;
  const setUpdate = {
    name,
    type,
    year,
    marina,
    skipper,
    active,
    cabins,
    length,
    price
  };
  const boat = await BoatService.update(id, setUpdate);
  return response.json({test: boat});
};

module.exports.remove = async (request, response) => {
  const { id } = request.params;
  const boat = await BoatService.delete(id);
  return response.json({test: boat});
};

module.exports.create = async (request, response) => {
  const {name, type, year, marina, skipper, active, cabins, length, price} = request.body;
  const insert = {
    name,
    type,
    year,
    marina,
    skipper,
    active,
    cabins,
    length,
    price
  };
  const boat = await BoatService.create(insert);
  return response.json({test: boat});
};
