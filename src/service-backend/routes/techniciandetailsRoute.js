const express = require("express")
const TechnicianDetails = require("../models/dbtechniciandetails")

const router = express.Router();

router.post("/technicianinfo" ,  async(req, res) => {
   // 
    /*const newShopkeeperDetails = new ShopkeeperDetails({
        shopName,
        shopkeeperName,
        shopkeeperID
    });*/
    const {technicianName, technicianID} = req.body;

    
    try{
        //const userExist = await ShopkeeperDetails.findOne({shopkeeperID : shopkeeperID})
        const newTechnicianDetails = new TechnicianDetails({technicianName, technicianID});
        newTechnicianDetails.save();

       
        res.status(217).json({technicianID : technicianID})
       
    }catch(err){
        console.log(err);
    }
})


router.route("/registeredtechnician").get((req, res) => {
   TechnicianDetails.find()
       .then(foundTechnicianDetails => res.json(foundTechnicianDetails))
})

module.exports = router;