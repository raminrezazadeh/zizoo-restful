const BoatModel = require('../models/boat');

module.exports.getAll = async () => {
  try {
    return await BoatModel.find({isDeleted: false});
  }catch (e) {
    throw Error()
  }
};

module.exports.findById = async (id) => {
  try {
    return await BoatModel.findById(id);
  }catch (e) {
    throw Error()
  }
};

module.exports.update = async (id, update) => {
  try {
    return await BoatModel.findOneAndUpdate({_id: id}, {$set: update}, {new: true});
  }catch (e) {
    throw Error()
  }
};

module.exports.delete = async (id) => {
  try {
    const boat = await BoatModel.findById(id);
    if(!boat) throw Error();
    boat.isDeleted = true;
    boat.deletedAt = new Date();
    await boat.save();
    return boat;
  }catch (e) {
    throw Error()
  }
};

module.exports.create = async (boat) => {
  try {
    return await BoatModel.create(boat);
  }catch (e) {
    throw Error();
  }
};
