const mongoose = require("mongoose");

const confirmSchema = new mongoose.Schema({

    serviceID: {
        type : String,
        required : true
    } ,

    message: {
        type : String,
        required : true
    } 

})

const Confirm = new mongoose.model("Confirm" , confirmSchema);
module.exports = Confirm ;