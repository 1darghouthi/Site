//importation des modules

//import express module
const express = require('express');

// creation de l'application BE

const bodyParser = require("body-parser");

const app = express();

// Matches : DataBase
let matches = [
    {
        "id": 1,
        "scoreOne": 3,
        "scoreTwo": 2,
        "teamOne": "RMD",
        "teamTwo": "FCB"
      },
      {
        "id": 2,
        "scoreOne": 2,
        "scoreTwo": 6,
        "teamOne": "JUV A",
        "teamTwo": "FCB B"
      },
      {
        "scoreOne": "5",
        "scoreTwo": "6",
        "teamOne": "mm",
        "teamTwo": "oo",
        "id": 3
      }
]

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));


// Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });


  app.get("/matches", (req, res)=>{
    console.log("Here into get all matches");
    res.json({x:matches});
  });

module.exports = app;