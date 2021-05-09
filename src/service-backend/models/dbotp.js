const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    otp: {
        type : String,
        required : true
    } 

})

const Otp = new mongoose.model("Otp" , otpSchema);
module.exports = Otp ;