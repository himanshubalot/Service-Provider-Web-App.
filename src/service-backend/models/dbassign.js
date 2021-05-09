const mongoose = require("mongoose");

const assignSchema = new mongoose.Schema({
    serviceID: {
        type : String,
        refer : 'Request' ,
        required : true
    } ,

    
    technicianID : {
        type : String,
    
        required : true
    },
})

const Assign = new mongoose.model("Assign" , assignSchema);
module.exports = Assign ;