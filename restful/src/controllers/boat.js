const BoatService = require('../services/boat');
const Response = require('../decorators/response');
const Common = require('../utilities/common');
const BadRequestException = require('../exceptions/badRequest');

const validUpdateKeys = [
  'name',
  'type',
  'year',
  'marina',
  'skipper',
  'active',
  'cabins',
  'length',
  'price',
];

module.exports.list = async (request, response) => {
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
  if(!Common.arrayElementExistInArray(validUpdateKeys, Object.keys(request.body))) {
    throw new BadRequestException('Body parameters is wrong');
  }

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
