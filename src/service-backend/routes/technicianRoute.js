const express = require("express")
const Technician = require("../models/dbtechnician")

const router = express.Router();

router.route("/addtechnician").post((req, res) => {
    const shopkeeperID =  req.body.shopkeeperID;
    const technicianID =  req.body.technicianID;
    const technicianName = req.body.technicianName;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const workingField = req.body.workingField;
    const experience = req.body.experience;
    const newTechnician = new Technician({
        shopkeeperID,
        technicianID,
        technicianName,
        contactNo,
        email,
        workingField,
        experience
    });

    newTechnician.save();
})


router.route("/techniciandetails").get((req, res) => {
     Technician.find()
         .then(foundTechnician => res.json(foundTechnician))

 })


module.exports = router;