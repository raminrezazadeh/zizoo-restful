const BoatService = require('../services/boat');
const Response = require('../decorators/response');

module.exports.list = async (request, response) => {
  // return response.json({sss:2});
  const { active = null } = request.query;
  const boats = await BoatService.getAll(active);
  return response.json(Response.decorate('boat', boats));
};

module.exports.find = async (request, response) => {
  const { id } = request.params;
  const boat = await BoatService.findById(id);
  return response.json(Response.decorate('boat', [boat]));
};

module.exports.update = async (request, response) => {
  const { id } = request.params;
  const boat = await BoatService.update(id, request.body);
  return response.json(Response.decorate('boat', [boat]));
};

module.exports.remove = async (request, response) => {
  const { id } = request.params;
  const boat = await BoatService.delete(id);
  return response.json(Response.decorate('boat', [boat]));
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
  return response.json(Response.decorate('boat', [boat]));
};
