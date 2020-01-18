const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    boats(input: GetBoatsInput): [Boat!]!
    boat(id: String!): Boat
  }
  
  type Boat {
    id: String!
    name: String
    type: BoatTypeEnum
    year: Int
    marina: String
    skipper: SkipperTypeEnum
    active: Boolean
    cabins: Int
    length: Int
    price: Float,
    deleted: Boolean
  }
  
  input GetBoatsInput {
    active: Boolean
  }
  
  enum BoatTypeEnum {
    CATAMARAN
    GULET
    MOTOR_BOAT
    MOTOR_CATAMARAN
    RIB
    SAILBOAT
    SPEEDBOAT
  }

  enum SkipperTypeEnum {
    OPTIONAL
    MANDATORY
    BAREBOAT
  }

`;

module.exports = typeDefs;
