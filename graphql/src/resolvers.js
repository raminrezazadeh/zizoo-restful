module.exports = {
  Query: {
    boats: (_, { input = null } , { dataSources }) =>
      dataSources.boatAPI.getAllBoats(input),
    boat: (_, { id }, { dataSources }) =>
      dataSources.boatAPI.getBoatById(id)
  }
};
