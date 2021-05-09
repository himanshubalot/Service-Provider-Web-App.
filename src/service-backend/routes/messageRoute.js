const express = require("express")
const Message = require("../models/dbmessage")

const router = express.Router();

router.route("/message").post((req, res) => {
    const serviceID = req.body.serviceID;
    const message =  req.body.message ;
    const newMessage = new Message({
        serviceID,
        message
    });

    newMessage.save();
})


 router.route("/status").get((req, res) => {
     Message.find()
         .then(foundMessage => res.json(foundMessage))
 })

module.exports = router;