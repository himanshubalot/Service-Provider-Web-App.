const express = require("express")
const Request = require("../models/dbrequest")
const ShopkeeperDetails = require("../models/dbshopkeeperdetails")

const router = express.Router();

router.post("/customerform", async (req, res) => {
    const customerID =  req.body.customerID;
    const customerName = req.body.customerName;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const address = req.body.address;
    const state = req.body.state;
    const city = req.body.city;
    const productName = req.body.productName;
    const productID = req.body.productID;
    const date = req.body.date;
    const description = req.body.description;
    const shopkeeperName = req.body.shopkeeperName;
    const shopkeeperID = req.body.shopkeeperID;
    const serviceID = req.body.serviceID;

    try{

    const userExist = await ShopkeeperDetails.findOne({shopkeeperID:shopkeeperID});
    const serviceExist = await Request.findOne({serviceID:serviceID});

    if(!userExist ){
        return res.status(411).json({error : "enter valid shopkeeperid"})
    }

    if(serviceExist){
        return res.status(412).json({error : "enter valid serviceid"})
    }

   

    const newRequest = new Request({
        customerID,
        customerName,
        contactNo,
        email,
        address,
        state,
        city,
        productName,
        productID,
        date,
        description,
        shopkeeperName,
        shopkeeperID,
        serviceID
    });
    newRequest.save();

    if(userExist && !serviceExist){
        return res.status(212).json({message : "successfully"})
    }
    }catch(err){
        console.log(err);
    }
    
    
})


router.route("/request").get((req, res) => {
    Request.find()
        .then(foundRequest => res.json(foundRequest))

})

router.route("/requesthistory").get((req, res) => {
    Request.find()
        .then(foundRequestHistory => res.json(foundRequestHistory))
        
})

router.route("/viewrequest").get((req, res) => {
    Request.find()
        .then(foundviewRequest => res.json(foundviewRequest))
        
})



module.exports = router;