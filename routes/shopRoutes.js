const express = require("express");
const router = express.Router();

const products = require("../data/products.js");

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:collectionName", (req, res) => {
  const collection = products.find(
    (p) => p.routeName == req.params.collectionName
  );
  res.send(collection);
});

router.get("/:collectionName/:id", (req, res) => {
  const collection = products.find(
    (p) => p.routeName == req.params.collectionName
  );

  const product = collection.items.find((p) => p.id == req.params.id);

  res.send(product);
});

module.exports = router;
