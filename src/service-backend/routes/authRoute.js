const express = require("express")
const Register = require("../models/dbsignup")

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
    const {username, email, password, user} = req.body;

    if(!username || !email || !password || !user){
        return res.status(422).json({error : "Please fill the field properly"});
    }

    try{
        const userExist = await Register.findOne({email : email})
        if(userExist){
            return res.status(422).json({error : "Email already exist"})
        }

        const newRegister = new Register({username, email, password, user});
        newRegister.save();
       // console.log(email);
        if(newRegister.user == 'customer'){
            res.status(201).json({message: "User registered successfully"})
        }
        else if(newRegister.user == 'shopkeeper'){
            res.status(202).json({username : username})
        }
        else{
            res.status(203).json({message: "User registered successfully"})
        }
        
    }catch(err) {
        console.log(err);
    }
    
   
})

//Login route
router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "Please fill the entry"})
        }

        const userLogin = await Register.findOne({email: email});
        console.log(userLogin)

        if(userLogin){
            if(password == userLogin.password && userLogin.user == 'customer'){
                res.status(200).json({message: "User logged in successfully"})
                
            }  
             else if(password == userLogin.password && userLogin.user == 'shopkeeper'){
                 res.status(201).json({message: "User logged in successfully"})
                
             }
             else if(password == userLogin.password && userLogin.user == 'technician'){
                res.status(202).json({message: "User logged in successfully"})
               
            } 
            else{
                res.status(400).json({error: "Invalid Credentials"})
            }

        } else{
            res.status(400).json({error: "User not found"})
        }
        
        

    }  catch(err) {
        console.log(err)
    }
})

module.exports = router;


