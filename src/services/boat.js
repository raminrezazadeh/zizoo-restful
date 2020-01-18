const BoatModel = require('../models/boat');
const RuntimeException = require('../exceptions/runtime');
const NotFoundException = require('../exceptions/notFound');

module.exports.getAll = async () => {
  try {
    return await BoatModel.find({isDeleted: false});
  }catch (e) {
    throw new RuntimeException(e.message);
  }
};

module.exports.findById = async (id) => {
  try {
    const result = await BoatModel.findById(id);
    if(!result) throw new NotFoundException('Can not found boat');
    return result
  }catch (e) {
    throw new RuntimeException(e.message);
  }
};

module.exports.update = async (id, update) => {
  try {
    return await BoatModel.findOneAndUpdate({_id: id}, {$set: update}, {new: true});
  }catch (e) {
    throw new RuntimeException(e.message);
  }
};

module.exports.delete = async (id) => {
  try {
    const boat = await BoatModel.findById(id);
    if(!boat) throw new NotFoundException('Can not find boat');
    boat.isDeleted = true;
    boat.deletedAt = new Date();
    await boat.save();
    return boat;
  }catch (e) {
    throw new RuntimeException(e.message);
  }
};

module.exports.create = async (boat) => {
  try {
    return await BoatModel.create(boat);
  }catch (e) {
    throw new RuntimeException(e.message);
  }
};
