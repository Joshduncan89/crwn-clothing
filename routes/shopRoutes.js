const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Collection = require("../config/db.js");
const { getCollections } = require("../controllers/CollectionController");

const products = require("../data/products.js");

router.route("/").get(getCollections);

// router.route("/:collectionName")
//       .get((req, res) => {

//         const collection = products.find(
//         (p) => p.routeName == req.params.collectionName
//         );
//         res.send(collection);
//       })
//       .post((req,res) => {
//         const collection = new Collection({
//           _id:mongoose.Schema.Types.ObjectId(),
//           title:'Accessories',
//           routeName:'accessories',
//           items:[
//             {
//               _id:mongoose.Schema.Types.ObjectId(),
//               name:'Apple Airpods',
//               imageUrl:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
//               price:110
//             },
//             {
//               _id:mongoose.Schema.Types.ObjectId(),
//               name:'Bluetooth Speaker',
//               imageUrl:"https://images.unsplash.com/photo-1598034989845-48532781987e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//               price:40
//             }
//           ]
//         })
//         const createdCollection = await collection.save()
//         res.send(createdCollection)
//       })

router.get("/:collectionName/:id", (req, res) => {
  const collection = products.find(
    (p) => p.routeName == req.params.collectionName
  );

  const product = collection.items.find((p) => p.id == req.params.id);

  res.send(product);
});

module.exports = router;
