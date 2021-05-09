const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    customerID: {
        type : String,
        required : true,
        unique : true 
    } ,

    customerName: {
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

    address : {
        type : String,
        required : true 
        // unique : true
    },
    
    productName : {
        type : String,
        required : true ,
        
    },

    productID : {
        type : String,
        required : true ,
        unique : true
    },

    date : {
        type : Date,
        required : true

    }

})

const Product = new mongoose.model("Product" , productSchema);
module.exports = Product ;