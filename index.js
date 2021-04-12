const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const shopRoutes = require("./routes/shopRoutes");
const connectDb = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

dotenv.config();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/shop", shopRoutes);

app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
