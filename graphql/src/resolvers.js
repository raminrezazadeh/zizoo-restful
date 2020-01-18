module.exports = {
  Query: {
    boats: (_, { input = null } , { dataSources }) =>
      dataSources.boatAPI.getAllBoats(input),
  }
};
