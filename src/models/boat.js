const mongoose = require('mongoose');
const boatType = require('../types/boat').boat;
const skipperType = require('../types/skipper').skipper;

const BoatSchema = new mongoose.Schema({
  name: {
    type: String
  },
  type: {
    type: String,
    enum: Object.values(boatType),
    default: boatType.CATAMARAN
  },
  year: {
    type: Number,
    min: [1900, 'To old']
  },
  marina: {
    type: String
  },
  skipper: {
    type: String,
    enum: Object.values(skipperType),
    default: skipperType.BAREBOAT
  },
  active: {
    type: Boolean,
    default: false
  },
  cabins: {
    type: Number
  },
  length: {
    type: Number
  },
  price: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date,
    default: null
  }
},{
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

module.exports = mongoose.model('Boat', BoatSchema);
