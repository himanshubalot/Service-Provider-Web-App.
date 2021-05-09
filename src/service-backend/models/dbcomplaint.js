const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    serviceID: {
        type : String,
        required : true,
        unique : true 
    } ,

    shopkeeperID: {
        type : String,
        required : true,
        unique : true 
        
    } ,
    
    description : {
        type : String,
        required : true ,
    }

})

const Complaint = new mongoose.model("Complaint" , complaintSchema);
module.exports = Complaint ;