const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose").default; // adding default

const userSchema = new Schema({
    email :{
        type : String,
        required : true
    }
})
// passport-local-mongoose   will add username and hashed password
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);