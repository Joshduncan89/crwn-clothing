const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const products = require("./data/products");
const Collection = require("./models/CollectionModel");

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Collection.insertMany(products);
    console.log("Data inserted");
    process.exit();
  } catch (error) {
    console.log("Error" + error);
    process.exit(1);
  }
};

importData();
