const express = require("express")
const Complaint = require("../models/dbcomplaint")

const router = express.Router();

router.route("/complaintform").post((req, res) => {
    const serviceID =  req.body.serviceID;
    const shopkeeperID = req.body.shopkeeperID;
    const description = req.body.description;
    const newComplaint = new Complaint({
        serviceID,
        shopkeeperID,
        description
    });

    newComplaint.save();
})


router.route("/complaint").get((req, res) => {
    Complaint.find()
        .then(foundComplaint => res.json(foundComplaint))
})

module.exports = router;