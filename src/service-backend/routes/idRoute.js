const express = require("express")
const ShopkeeperDetails = require("../models/dbshopkeeperdetails")
const CustomerDetails = require("../models/dbcustomerdetails")
const TechnicianDetails = require("../models/dbtechniciandetails")


const router = express.Router();

router.post("/customerid" ,  async(req, res) => {
   // 
    /*const newShopkeeperDetails = new ShopkeeperDetails({
        shopName,
        shopkeeperName,
        shopkeeperID
    });*/
    const {customerID} = req.body;

    
    try{
        const userExist = await CustomerDetails.findOne({customerID : customerID})
        //const newShopkeeperDetails = new ShopkeeperDetails({shopName, shopkeeperName, shopkeeperID});
        //newShopkeeperDetails.save();
        if(!userExist){
            return res.status(422).json({error : "Enter valid id"})
        }
        else{
            res.status(209).json({customerID : customerID})
        }
    }catch(err){
        console.log(err);
    }
})

router.post("/shopkeeperid" ,  async(req, res) => {
    // 
     /*const newShopkeeperDetails = new ShopkeeperDetails({
         shopName,
         shopkeeperName,
         shopkeeperID
     });*/
     const {shopkeeperID} = req.body;
 
     
     try{
         const userExist = await ShopkeeperDetails.findOne({shopkeeperID : shopkeeperID})
         //const newShopkeeperDetails = new ShopkeeperDetails({shopName, shopkeeperName, shopkeeperID});
         //newShopkeeperDetails.save();
         if(!userExist){
             return res.status(423).json({error : "Enter valid id"})
         }
         else{
             res.status(210).json({shopkeeperID : shopkeeperID})
         }
     }catch(err){
         console.log(err);
     }
 })
 

 router.post("/technicianid" ,  async(req, res) => {
    // 
     /*const newShopkeeperDetails = new ShopkeeperDetails({
         shopName,
         shopkeeperName,
         shopkeeperID
     });*/
     const {technicianID} = req.body;
 
     
     try{
         const userExist = await TechnicianDetails.findOne({technicianID : technicianID})
         //const newShopkeeperDetails = new ShopkeeperDetails({shopName, shopkeeperName, shopkeeperID});
         //newShopkeeperDetails.save();
         if(!userExist){
             return res.status(424).json({error : "Enter valid id"})
         }
         else{
             res.status(211).json({technicianID : technicianID})
         }
     }catch(err){
         console.log(err);
     }
 })
 
 
// router.route("/viewshopkeeperdetails").get((req, res) => {
//     ShopkeeperDetails.find()
//         .then(foundShopkeeperDetails => res.json(foundShopkeeperDetails))
// })

module.exports = router;