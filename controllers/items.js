const items = require("../items");

const getItem = (req, reply) => {
  const { id } = req.params;

  const item = items.find((item) => item.id === id);

  reply.send(item);
};

const getItems = (req, reply) => {
  reply.send(items);
};

module.exports = { getItem, getItems };
