const mongoose = require("mongoose");

const technicianDetailsSchema = new mongoose.Schema({
    technicianName: {
        type : String,
        required : true,
    } ,

    

    technicianID: {
        type : Number,
        required : true,
        unique : true 
        
    }

    
})

const TechnicianDetails = new mongoose.model("TechnicianDetails" , technicianDetailsSchema);
module.exports = TechnicianDetails ;