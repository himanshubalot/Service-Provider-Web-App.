const mongoose = require("mongoose");

const shopkeeperDetailsSchema = new mongoose.Schema({
    shopName: {
        type : String,
        required : true,
    } ,

    shopkeeperName : {
        type : String,
        required : true ,
    },

    shopkeeperID: {
        type : Number,
        required : true,
        unique : true 
        
    }
    
})

const ShopkeeperDetails = new mongoose.model("ShopkeeperDetails" , shopkeeperDetailsSchema);
module.exports = ShopkeeperDetails ;