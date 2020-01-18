const { RESTDataSource } = require('apollo-datasource-rest');
const config = require('../config');

class BoatAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.BoatRest.url;
  }

  async getAllBoats(input) {
    const params = input ? { active: input.active} : {};
    const response = await this.get('/', params);
    return Array.isArray(response.data)
      ? response.data.map(boat => this.decorate(boat))
      : [];
  }

  decorate(boat) {
    return {
      id: boat.id,
      name: boat.attributes.name,
      type: boat.attributes.type,
      year: boat.attributes.year,
      marina: boat.attributes.marina,
      skipper: boat.attributes.skipper,
      active: boat.attributes.active,
      cabins: boat.attributes.cabins,
      length: boat.attributes.length,
      price: boat.attributes.price,
      deleted: boat.attributes.isDeleted
    };
  }
}

module.exports = BoatAPI;
