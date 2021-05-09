const express = require("express")
const Confirm = require("../models/dbconfirm")

const router = express.Router();

router.route("/confirmpage").post((req, res) => {
    const serviceID = req.body.serviceID;
    const message =  req.body.message ;
    const newConfirm = new Confirm({
        serviceID,
        message
    });

    newConfirm.save();
})


 router.route("/techstatus").get((req, res) => {
     Confirm.find()
         .then(foundConfirm => res.json(foundConfirm))
 })

module.exports = router;