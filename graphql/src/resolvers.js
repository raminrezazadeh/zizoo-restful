module.exports = {
  Query: {
    boats: (_, { input = null } , { dataSources }) =>
      dataSources.boatAPI.getAllBoats(input),
    boat: (_, { id }, { dataSources }) =>
      dataSources.boatAPI.getBoatById(id)
  },
  Mutation: {
    createBoat:(_, { input } , { dataSources }) =>
      dataSources.boatAPI.createBoat(input),
    updateBoat:(_, { id, input } , { dataSources }) =>
      dataSources.boatAPI.updateBoat(id, input),
    deleteBoat:(_, { id } , { dataSources }) =>
      dataSources.boatAPI.deleteBoat(id),
  }
};
