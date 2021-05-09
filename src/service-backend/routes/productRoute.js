const express = require("express")
const Product = require("../models/dbproduct")

const router = express.Router();

router.route("/addproduct").post((req, res) => {
    const customerID =  req.body.customerID;
    const customerName = req.body.customerName;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const address = req.body.address;
    const productName = req.body.productName;
    const productID = req.body.productID;
    const date = req.body.date;
    const newProduct = new Product({
        customerID,
        customerName,
        contactNo,
        email,
        address,
        productName,
        productID,
        date
    });

    newProduct.save();
})


 router.route("/productdetails").get((req, res) => {
     Product.find()
         .then(foundProduct => res.json(foundProduct))

 })


module.exports = router;