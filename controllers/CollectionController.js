const asyncHandler = require("express-async-handler");
const Collection = require("../models/CollectionModel");

const getCollections = asyncHandler(async (req, res) => {
  const collections = await Collection.find({});

  res.send(collections);
});

module.exports = { getCollections };
