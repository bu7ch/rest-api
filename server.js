// configuration de base
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.listen(3000, ()=> {
  console.log(`[🚧 Listening...!]`)
})