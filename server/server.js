const express = require("express");
const mongoose = require ("mongoose");
const  cors = require("cors");
const { readdirSync } = require("fs");

require("dotenv").config();
//const postRoute = require("./routes/posts");

const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("CONNECTED TO MONGO DB"))
  .catch((err) => console.log("DB Connection Error", err));

//middlewares
app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin:( process.env.CLIENT_URL),
  })
);

//app.use("/posts", postRoute);

//autoload routes

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
//listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is running successfully "));
