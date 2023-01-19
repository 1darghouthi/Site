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
      if(matches[i].scoreOne == req.body.scoreOne && matches[i].scoreTwo== req.body.scoreTwo){
        findedMatches.push(matches[i]);
      }
    }
    console.log("Here finded matches", findedMatches);
    res.json({matches: findedMatches});

   });
   // Traitement du request : Get All Users
   app.get("/users", (req, res)=>{
    console.log("Here into get all users");
    User.find().then((docs)=>{
      res.json({ user : doc});
    })

   });

   // Traitement du request :   Login User
   app.post("/users/login", (req, res) => {
    console.log("Here into login", req.body);
    User.findOne({ email: req.body.email }).then((findedUser) => {
        if (!findedUser) {
            res.json({ message: "0" });
        }
        return bcrypt.compare(req.body.pwd, findedUser.pwd);
    })
        .then((pwdResult) => {
            console.log("Here compare result", pwdResult);
            if (!pwdResult) {
                console.log("Send response with incorrect PWD");
                res.json({ message: "1" });
            } else {
                User.findOne({ email: req.body.email }).then((finalUser) => {
                    console.log("Here final user", finalUser);
                    let user = {
                        id: finalUser._id,
                        fName: finalUser.firstName,
                        lName: finalUser.lastName,
                        role: finalUser.role,
                    };
                    res.json({ message: "2", user: user });
                });
            }
        });
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



  //------------Exportation de l'app------------//
  // App is importable from another files
module.exports = app;
