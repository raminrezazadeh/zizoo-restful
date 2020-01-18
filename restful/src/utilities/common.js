module.exports.arrayElementExistInArray = (source, target) => {
  for (const key of target) {
    if(!source.includes(key)) return false
  }
  return true;
};
