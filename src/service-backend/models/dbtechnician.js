const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema({

    shopkeeperID: {
        type : String,
        required : true
    } ,

    technicianID: {
        type : String,
        required : true,
        unique : true 
    } ,

    technicianName: {
        type : String,
        required : true
        
    } ,
    
    contactNo : {
        type : Number,
        required : true ,
        unique : true
    },

    email : {
        type : String,
        required : true ,
        unique : true
    },

    workingField : {
        type : String,
        required : true 
        // unique : true
    },
    
    experience : {
        type : String,
        required : true 
        
    }

})

const Technician = new mongoose.model("Technician" , technicianSchema);
module.exports = Technician ;