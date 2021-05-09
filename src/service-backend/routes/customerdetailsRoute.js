const express = require("express")
const CustomerDetails = require("../models/dbcustomerdetails")

const router = express.Router();

router.post("/customerdetails" , async(req, res) => {
    const {customerName, customerID} = req.body;
    

    try{
        //const userExist = await ShopkeeperDetails.findOne({shopkeeperID : shopkeeperID})
        const newCustomerDetails = new CustomerDetails({customerName, customerID});
        newCustomerDetails.save();

       
        res.status(208).json({customerID : customerID})
       
    }catch(err){
        console.log(err);
    }

    
})


// router.route("/viewshopkeeperdetails").get((req, res) => {
//     ShopkeeperDetails.find()
//         .then(foundShopkeeperDetails => res.json(foundShopkeeperDetails))
// })

module.exports = router;