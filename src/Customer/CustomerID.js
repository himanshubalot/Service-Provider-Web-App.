import "./CustomerDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderCustomer from "../Header/HeaderCustomer";

function CustomerID() {

  

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
        
        customerID: input.customerID
      }
 
      const res =  await fetch("/customerid", {
       method: "POST",
       headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
          customerID:input.customerID
       })
     })
     console.log(input);
     const data = await  res.json();
     console.log(data.customerID);
           
           if(res.status === 209 ){
           //  window.alert("Account created successfully");
             history.push("/headercustomer?" + data.customerID);
           } 
           else if(res.status === 422){
             window.alert("Enter Valid id");
           }
 
           }

  

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
        Enter your id</div>
        <form method="POST">
                
                
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

export default CustomerID;
