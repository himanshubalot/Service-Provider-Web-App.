import "./Otp.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderTechnician from "../Header/HeaderTechnician"

function Otp() {

  
  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
       // window.alert("Please note down your Shopkeeper ID : " + randomNum);
        //window.onload = function () {
          //  document.getElementById("shopkeeperID").value = randomNum.substr(0,5); 
        //}
   //} 
  //window.onload(myFunction());
  //alert(myFunction())

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

   const handleClick = async (event) => {
     event.preventDefault();
     //console.log(input);
     const newOtp = {
       otp: input.otp,
       
     }

     const res = await fetch("/otp", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        otp:input.otp
      })
    })
    const data = await res.json();
    console.log(data);
          
          if(res.status === 401 || !data){
            window.alert("Invalid OTP");
          } 
          else if(res.status === 400 || !data) {
            window.alert("Please enter the OTP");
           // history.push("/customerhome");
          }
          else if(res.status === 200 ){
            window.alert("OTP Verified Successfully")
            history.push("/confirmpage/" + `${s2}`);
          }
     

    }
     
    

      //axios.post('http://localhost:3001/shopkeeperdetails', newShopkeeperDetails)
    

  return (
    
        <div className="wrapper-shopkeeperdetails">
         
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

export default Otp;
