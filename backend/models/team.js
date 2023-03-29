// import mongoose module
const mongoose =require("mongoose");

const teamSchema = mongoose.Schema({
  name: String,
  stadium: String,
  owner:String,
  country:String
});

const team= mongoose.model("Team",teamSchema);
module.exports = team;
