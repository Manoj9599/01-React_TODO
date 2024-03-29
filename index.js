const express = require("express"),
  app = express(),
  signup = require("./router/signup"),
  login = require("./router/login"),
  admin = require("./router/admin"),
  getAllUsers = require("./router/getAllUsers"),
  getBYyId = require("./router/getBYyId");

app.use(express.json());
require("dotenv").config();

app.post("/api/signup", signup);
app.post("/api/login", login);
app.post("/api/admin/:email", admin);
app.get("/api/getAllUsers/", getAllUsers);
app.get("/api/getBYyId/:id", getBYyId);
let PORT = 3000;
app.listen(`${PORT}`, () => {
  console.log(`BE server running at ${PORT}...`);
});
