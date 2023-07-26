const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb");
const Comments = require("./models/commentaires")
const mongoose = require("mongoose");
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
app.use(express.json({ extended: false }));

// const withDB = async (operations, res) => {
//     try {
//       const client = await MongoClient.connect("mongodb://localhost:27017");
//       const db = client.db("mernblog");
//       await operations(db);
//     //   res.status(200).json({message: "success"});
     
//     } catch (error) {
//       res.status(500).json({ message: "Error connecting to database", error });
//     }
//   };

mongoose
  .connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.get("/", (req, res, next) => res.send("Welcome to server!"));


// app.get("/api/articles/:name", async (req, res) => {
//   withDB(async (db) => {
//     const articleName = req.params.name;
//     const articleInfo = await db
//       .collection("articles")
//       .findOne({ name: articleName });
//     res.status(200).json(articleInfo);
//   }, res);
// });

// app.post("/api/articles/:name/add-comments", (req, res) => {
//     const { username, text } = req.body;
//     const articleName = req.params.name;
  
//     withDB(async (db) => {
//       const articleInfo = await db
//         .collection("articles")
//         .findOne({ name: articleName });
//       await db.collection("articles").updateOne(
//         { name: articleName },
//         {
//           $set: {
//             comments: articleInfo.comments.concat({ username, text }),
//           },
//         }
//       );
//       const updateAricleInfo = await db
//         .collection("articles")
//         .findOne({ name: articleName });
//       res.status(200).json(updateAricleInfo);
//     }, res);
//   });

app.post("/api/articles/add-comments", (req, res) => {

    const comments = new Comments({
        ...req.body,
    });
    comments.save()
    .then((comments) => { res.status(201).json({message: 'commentaire enregistré !', comments})})
    .catch(error => { res.status(400).json( { error })})

});

module.exports = app;
