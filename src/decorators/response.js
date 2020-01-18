module.exports.decorate = (model, data) => {
  const output = {
    meta: {
      total: 0
    },
    data: []
  };

  data.forEach(item => {
    const row = {
      type: model,
      id: item.id,
      attributes: item
    };
    output.data.push(row);
    output.meta.total++;
  });

  return output;
};
