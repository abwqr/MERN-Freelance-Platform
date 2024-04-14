const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/user");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.use("/user", usersRoutes);

mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://abwqr:abdullah1172@cluster.fxiv8dr.mongodb.net/kiosk_db?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;