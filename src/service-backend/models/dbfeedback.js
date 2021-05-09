const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    serviceID: {
        type : String,
        required : true,
        unique : true 
    } ,

    shopkeeperID: {
        type : String,
        required : true
    } ,

    exp: {
        type : String ,
        required : true 
        
    } ,
    
    comment : {
        type : String , 
        required : true
    }

})

const Feedback = new mongoose.model("Feedback" , feedbackSchema);
module.exports = Feedback ;