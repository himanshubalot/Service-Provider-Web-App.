const mongoose = require("mongoose");

const customerDetailsSchema = new mongoose.Schema({
    customerName: {
        type : String,
        required : true,
    } ,

    customerID: {
        type : Number,
        required : true,
        unique : true     
    }
    
})

const CustomerDetails = new mongoose.model("CustomerDetails" , customerDetailsSchema);
module.exports = CustomerDetails ;