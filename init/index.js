if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "../.env" }); // agar .env project root me hai
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL; // apne .env me jo variable naam hai wahi yahan daalein

main()
  .then(() => {
    console.log("connected to DB");
    initDB(); // connection ke baad hi call ho raha hai
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a8fd43cc418182ca7b15595",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was saved");
  mongoose.connection.close();
};
