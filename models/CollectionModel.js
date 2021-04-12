const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
  items: [
    {
      name: String,
      imageUrl: String,
      price: Number,
    },
  ],
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
