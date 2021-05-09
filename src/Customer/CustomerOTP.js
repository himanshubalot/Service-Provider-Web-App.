import "../Technician/Otp.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderCustomer from "../Header/HeaderCustomer";

function CustomerOTP() {

  window.onload = function myFunction(){
    var now = new Date();
       var randomNum = '';
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += now.getTime();
       randomNum = randomNum.substr(1,5);
       //document.getElementsByName(randomNum)
       alert('OTP:' + randomNum);
       return randomNum;
     
 }

  //var x = myFunction();
  const history = useHistory();
  const [input, setInput] = useState({
    otp: ''
  })

  function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput =>{
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

    const handleClick = async(event) => {
      event.preventDefault();
      //console.log(input);
      const newOtp = {
        otp: input.otp
      }
 
       const res =  await fetch("/customerotp", {
       method: "POST",
        headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
         otp:input.otp
       })
     })
     console.log(input);
     const data = await  res.json();
     console.log(data.customerID);
           
        //    if(res.status === 208 ){
        //      window.alert("Account created successfully");
        //      history.push("/headercustomer?" + data.customerID);
        //    } 
        //    else{
        //      window.alert("account not created");
        //    }
        history.push("/customerhome?" + data.otp);
          }

  // function handleClick(event){
  //   event.preventDefault();
  //   console.log(input);
  //   const newRegister = {
  //     username: input.username,
  //     email: input.email,
  //     password: input.password,
  //     user: input.user
  //   }

    //  axios.post('http://localhost:3001/signup', newRegister).then(
    //    res => {
    //      console.log(res)
    //    }
    //  ).catch(
    //    err => {
    //      console.log(err)
    //    }
    //  )
    

  return (
    
        <div className="wrapper-customerdetails">
            <div class="title">
        Enter OTP</div>
        <form method="POST">
                
                <div class="field">
                <input onChange={handleChange} type="text" required name="otp" value={input.otp}/>
                <label>OTP</label>
                </div>
               
                <div class="content">
                
                 <div class="field">
                    <input onClick={handleClick} type="submit" value="Submit"/>
                </div>
                </div>
            
            </form>
    </div>
      
    
  );
}

export default CustomerOTP;
