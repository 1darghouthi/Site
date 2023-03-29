const mongoose= require("mongoose");
// const uniqueValidator = require('mongoose-unique-Validator');
// const { BoundDirectivePropertyAst } = require('@angular/compiler');
// const { LogicalFileSystem } = require('@angular/compiler-cli/src/ngtsc/file_system');
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    // role: String,
    // avatar: String
});

// userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);

module.exports = user;
