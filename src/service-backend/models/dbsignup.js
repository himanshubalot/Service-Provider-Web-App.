const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true 
    } ,

    email: {
        type : String,
        required : true,
        unique : true 
    } ,
    
    password: {
        type : String,
        required : true 
    } ,

    user: {
        type : String,
        required : true
    }

    
})

const Register = new mongoose.model("Register" , signupSchema);
module.exports = Register ;