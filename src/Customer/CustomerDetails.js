import "./CustomerDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderCustomer from "../Header/HeaderCustomer";

function CustomerDetails() {

  window.onload = function myFunction(){
    var now = new Date();
       var randomNum = '';
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += Math.round(Math.random() * 9);
       randomNum += now.getTime();
       randomNum = randomNum.substr(1,5);
       alert('Your Customer ID:' + randomNum);
       return randomNum;
     
 }

  //var x = myFunction();
  const history = useHistory();
  const [input, setInput] = useState({
    customerName: '',
    customerID: ''
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
      const newCustomerDetails = {
        customerName: input.customerName,
        customerID: input.customerID
      }
 
      const res =  await fetch("/customerdetails", {
       method: "POST",
       headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
         customerName:input.customerName, customerID:input.customerID
       })
     })
     console.log(input);
     const data = await  res.json();
     console.log(data.customerID);
           
           if(res.status === 208 ){
             window.alert("Account created successfully");
             history.push("/headercustomer?" + data.customerID);
           } 
           else{
             window.alert("account not created");
           }
 
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
        Enter your details</div>
        <form method="POST">
                
                <div class="field">
                <input onChange={handleChange} type="text" required name="customerName" value={input.customerName}/>
                <label>Customer Name</label>
                </div>
                <div class="field">
                    <input onChange={handleChange} type="number" required name="customerID" id="customerID" value={input.customerID}/>
                    <label>Customer ID</label>
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

export default CustomerDetails;
