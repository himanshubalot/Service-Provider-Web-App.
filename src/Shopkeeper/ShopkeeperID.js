import "./ShopkeeperDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderShopkeeper from "../Header/HeaderShopkeeper";

function ShopkeeperID() {

  

  //var x = myFunction();
  const history = useHistory();
  const [input, setInput] = useState({
    //customeName: '',
    shopkeeperID: ''
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
        
        shopkeeperID: input.shopkeeperID
      }
 
      const res =  await fetch("/shopkeeperid", {
       method: "POST",
       headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
          shopkeeperID:input.shopkeeperID
       })
     })
     console.log(input);
     const data = await  res.json();
     console.log(data.shopkeeperID);
           
           if(res.status === 210 ){
           //  window.alert("Account created successfully");
             history.push("/headershopkeeper?" + data.shopkeeperID);
           } 
           else if(res.status === 423){
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
                    <input onChange={handleChange} type="number" required name="shopkeeperID" id="shopkeeperID" value={input.shopkeeperID}/>
                    <label>Shopkeeper ID</label>
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

export default ShopkeeperID;
