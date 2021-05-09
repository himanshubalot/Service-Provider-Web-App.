const express = require("express")
const ShopkeeperDetails = require("../models/dbshopkeeperdetails")

const router = express.Router();

router.post("/shopkeeperdetails" ,  async(req, res) => {
   // 
    /*const newShopkeeperDetails = new ShopkeeperDetails({
        shopName,
        shopkeeperName,
        shopkeeperID
    });*/
    const {shopName, shopkeeperName, shopkeeperID} = req.body;

    
    try{
        //const userExist = await ShopkeeperDetails.findOne({shopkeeperID : shopkeeperID})
        const newShopkeeperDetails = new ShopkeeperDetails({shopName, shopkeeperName, shopkeeperID});
        newShopkeeperDetails.save();

       
        res.status(207).json({shopkeeperID : shopkeeperID})
       
    }catch(err){
        console.log(err);
    }
})


router.route("/viewshopkeeperdetails").get((req, res) => {
    ShopkeeperDetails.find()
        .then(foundShopkeeperDetails => res.json(foundShopkeeperDetails))
})

module.exports = router;