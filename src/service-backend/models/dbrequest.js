const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    customerID: {
        type : String,
        required : true
    } ,

    customerName: {
        type : String,
        required : true
        
    } ,
    
    contactNo : {
        type : Number,
        required : true 
    },

    email : {
        type : String,
        required : true 
    },

    address : {
        type : String,
        required : true 
        // unique : true
    },
    
    state : {
        type : String,
        required : true 
        
    },

    city : {
        type : String,
        required : true 
    
    },

    productName : {
        type : String,
        required : true
        
    },

    productID : {
        type : String,
        required : true 
    },

    date : {
        type : Date,
        required : true ,

    },

    description : {
        type : String ,
        required : true

    } , 

    shopkeeperName : {
        type : String,
        required : true
        
    },

    shopkeeperID : {
        type : String,
        required : true
    },

    serviceID : {
        type : String,
        required : true
    },

})

const Request = new mongoose.model("Request" , requestSchema);
module.exports = Request ;