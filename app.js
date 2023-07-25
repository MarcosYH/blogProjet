const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true"); // permet l'envoi de cookies
    next();
  });
// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initialize middleware
app.use(express.json({ extended: false}));

app.get('/', (req, res, next) => res.send("Welcome to server!"));



  module.exports = app;