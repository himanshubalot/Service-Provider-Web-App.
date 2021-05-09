const express = require("express")
//const Request = require("../models/dbrequest")
const Assign = require("../models/dbassign");
//const { request } = require("express");


const router = express.Router();

router.post("/assigntechnician", async (req, res) => {
    
    const serviceID = req.body.serviceID;
    const technicianID =  req.body.technicianID ;

 //   try{

   //     const userExist = await Request.findOne({serviceID:serviceID});
     //   if(userExist){
       //      Request.insertOne({technicianID:technicianID})
           //  return res.status(411).json({error : "enter valid shopkeeperid"})
        
        const newAssign = new Assign({
            
            serviceID,
            technicianID
       });
        newAssign.save();
    //}
       
      //  }catch(err){
        //    console.log(err);
        //}
        
        
    

    
})




//module.exports.getTechnicianByServiceID = (id,callback) =>{
 //   Request.find({serviceID:serviceID} , callback).populate('technicianID');
//}

 /*router.route("/status").get((req, res) => {
     Message.find()
         .then(foundMessage => res.json(foundMessage))
 })*/

 router.route("/viewservice").get((req, res) => {
  Assign.find()
      .then(foundAssign => res.json(foundAssign))
      
})
module.exports = router;