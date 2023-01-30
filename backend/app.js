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
        "scoreOne": "3",
        "scoreTwo": "1",
        "teamOne": "mm",
        "teamTwo": "oo",
        "id": 3
      },
      {
        "scoreOne": "3",
        "scoreTwo": "1",
        "teamOne": "RMD",
        "teamTwo": "Paris",
        "id": 3
      }
];

let users = [
  {
    id:1,
    firstName:"Anis",
    lastName: "Darghouthi",
    email: "anis@gmail.com",
    pwd: "aaa",
    role: "client",

  },
  {
    id:2,
    firstName:"salah",
    lastName: "Masmoudi",
    email: "salah@gmail.com",
    pwd: "aaa",
    role: "admin",

  },
];

let stadiums =[
  {id: 1,
  name:"Camp New",
  country:"Spain",
  capacity:8000
},
{id: 2,
  name:"Arena",
  country:"Tunisia",
  capacity:300
},

];

 function generateId(T) {
  var max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 0; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max;
}

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

  // importation models ==> le nom du const PascalCase

const User = require("./models/user");




  app.get("/matches", (req, res)=>{
    console.log("Here into get all matches");
    res.json({x:matches});
  });

  // Traitement du request : Get Match By ID
  app.get("/matches/:id", (req, res)=>{
    console.log("Here into get match by ID", req.params.id);
    let match = matches.find((obj)=>{
      return obj.id == req.params.id
    });
    // for (let i =0; i <matches.length; i++){

    //  if (matches[i].id == req.params.id){
    //   match = matches[i];
    //   break;
    //  }
    // }
    res.json({x:match});

  });

// Traitement du request : Add Match
  app.post("/matches", (req,res)=> {
    console.log("Here into add",req.body);
    // save object into matches
    let match = req.body;
    match.id = generateId(matches)+1;
    matches.push(match);
    // response
    res.json ({ message: "Added with success"});
  });

  // Traitement du request : Delete Match By ID
  app.delete("/matches/:id", (req, res)=>{
    console.log("Here into delete", req.params.id);
    for (let i=0; i<matches.length;i++) {
      if (matches[i].id == req.params.id){
        matches.splice(i, 1);
        break;
      }
    }
    res.json({message: "Deleted with success"});

  });

   // Traitement du request : Edit Match By ID
   app.put("/matches/:id", (req,res)=>{
    console.log("Here into edit match Body", req.body);
    console.log("Here into edit match ID", req.params.id);
    for (let i=0; i<matches.length; i++){
      if(matches[i].id== req.params.id){
      matches[i] = req.body;
      break;
    }
  }
  res.json({message: "Edited with success"});
   });

   // Traitement du request : search matches
   app.post("/matches/search", (req,res)=>{
    console.log("Here into search", req.body);
    let findedMatches=[];
    for (let i=0; i< matches.length ; i++){
      if(matches[i].scoreOne == req.body.scoreOne &&
         matches[i].scoreTwo== req.body.scoreTwo){
        findedMatches.push(matches[i]);
      }
    }
    console.log("Here finded matches", findedMatches);
    res.json({matches: findedMatches});

   });


   // Traitement du request : Add User
   app.post("/users", (req, res)=>{
    console.log("Here into signup ", req.body);
    let user = req.body;
    user.id = generateId(users)+1;
    users.push(user);
    res.json({message: "User added with success"});
  });


   // Traitement du request : Get All Users
   app.get("/users", (req, res)=>{
    console.log("Here into get all users");

      res.json({ users : users});


   });

   // Traitement du request :   Login User
   app.post("/users/login", (req, res) => {
    console.log("Here into login", req.body);
    let isFounded=false;
    let findedUser={};
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email && users[i].pwd == req.body.pwd){
        isFounded=true;
        findedUser={
          firstName: users[i].firstName,
          lastName: users[i].lastName,
          email: users[i].email,
          role: users[i].role,

        };
        break;
      }

    }
    res.json ({ isFounded: isFounded, user: findedUser});
  });


   // traitement du request: Get user by id
app.get("/users/:id", (req, res) => {
  console.log("Here into get user by ID", req.params.id)
  User.findOne({ id : req.params.id}).then((doc)=>{
      res.json({ user : doc });
  })
  });

   // traitement du request: delete Users
app.delete("/users/:id", (req, res) => {
  console.log("here into delete", req.params._id);
  User.deleteOne({ _id: req.params.id }).then((response) => {
      console.log("here response from Db", response);
      if (response.deletedCount == 1)
          res.json({ message: "deleted with success" });
  })
});





//*******************************************************//

// Traitement du request : Add Stadium
app.post("/stadiums", (req, res)=>{
  console.log("Here into add stadium", req.body);
  let stadiumObj = req.body;
  stadiumObj.id = generateId(stadiums)+1;
  stadiums.push(stadiumObj);
  res.json({message : "Stadium added with success"});

});

// Traitement du request : Get all Stadium

app.get("/stadiums", (req, res)=>{
  console.log("Here into get all stadiums");
  res.json({ stadiums: stadiums});
});
// Traitement du request : Delete Stadium by ID
app.delete("/stadiums/:id", (req,res)=>{
  console.log("Here into delete",req.params.id);
  for (let i=0; i<stadiums.length; i++){
    if(stadiums[i].id ==req.params.id){
      stadiums.splice(i,1);
      break;
    }
  }
  res.json({message: "Deleted with success"});
});

// Traitement du request : Get Stadium by ID

app.get("/stadiums/:id", (req,res)=>{
  console.log("Here id", req.params.id);
  let findedStadium;
  for (let i=0; i< stadiums.length; i++){
    if(stadiums[i].id == req.params.id){
      findedStadium = stadiums[i];
      break;
    }
  }
  res.json({ stadium: findedStadium});
});

// Traitement du request : Edit Stadium by ID
app.put("/stadiums", (req,res)=>{
  for (let i = 0; i < stadiums.length; i++) {
    if (stadiums[i].id == req.body.id ){
      stadiums[i] =req.body;
      break;

    }

  }
  res.json({ message: "Edited with success"});

});


  //------------Exportation de l'app------------//
  // App is importable from another files
module.exports = app;
