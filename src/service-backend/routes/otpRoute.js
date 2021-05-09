const express = require("express")
const Otp = require("../models/dbotp")

const router = express.Router();

router.post("/customerotp", async (req, res) => {
    const otp =  req.body.otp;
    
    
    const newOtp = new Otp({
        otp
    });
    newOtp.save();

    
    
    
})

router.post("/otp" , async(req,res) => {
    try{

        const {otp} = req.body;
        if(!otp){
            return res.status(400).json({error: "Please fill the entry"})
        }

        const otpexist = await Otp.findOne({otp: otp});
        if(otpexist){
            res.status(200).json({message: "OTP Sent Successfully"})
        }
        else{
            res.status(401).json({error: "Invalid otp"})
        }
    }catch(err){
        console.log(err)
    }


})


// router.route("/request").get((req, res) => {
//     Request.find()
//         .then(foundRequest => res.json(foundRequest))

// })

// router.route("/requesthistory").get((req, res) => {
//     Request.find()
//         .then(foundRequestHistory => res.json(foundRequestHistory))
        
// })

// router.route("/viewrequest").get((req, res) => {
//     Request.find()
//         .then(foundviewRequest => res.json(foundviewRequest))
        
// })



module.exports = router;