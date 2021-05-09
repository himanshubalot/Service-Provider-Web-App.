const express = require("express")
const Feedback = require("../models/dbfeedback");

const router = express.Router();

router.route("/feedbackform").post((req, res) => {
    const serviceID =  req.body.serviceID;
    const shopkeeperID =  req.body.shopkeeperID;
    const exp = req.body.exp;
    const comment = req.body.comment;
    const newFeedback = new Feedback({
        serviceID,
        shopkeeperID,
        exp,
        comment
    });

    newFeedback.save();
})


router.route("/feedback").get((req, res) => {
    Feedback.find()
        .then(foundFeedback => res.json(foundFeedback))
})

module.exports = router;