import "./ShopkeeperDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";


function ShopkeeperDetails() {

  window.onload = function myFunction(){
     var now = new Date();
        var randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += now.getTime();
        randomNum = randomNum.substr(1,5);
       // return randomNum;
       alert('Your Shopkeeper ID:' + randomNum);
  }
       // window.alert("Please note down your Shopkeeper ID : " + randomNum);
        //window.onload = function () {
          //  document.getElementById("shopkeeperID").value = randomNum.substr(0,5); 
        //}
   //} 
  //window.onload(myFunction());
  //alert(myFunction())

  const history = useHistory();
  const [input, setInput] = useState({
    shopName: '',
    shopkeeperName: '',
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
     const newShopkeeperDetails = {
       shopName: input.shopName,
       shopkeeperName: input.shopkeeperName,
       shopkeeperID: input.shopkeeperID
     }

     const res =  await fetch("/shopkeeperdetails", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        shopName:input.shopName, shopkeeperName:input.shopkeeperName, shopkeeperID:input.shopkeeperID
      })
    })
    console.log(input);
    const data = await  res.json();
    console.log(data.shopkeeperID);
          
          if(res.status === 207){
            window.alert("Account created successfully");
            history.push("/headershopkeeper?" + data.shopkeeperID);
          } 
          else{
            window.alert("account not created");
          }

      //axios.post('http://localhost:3001/shopkeeperdetails', newShopkeeperDetails)
    } 

  return (
    
        <div className="wrapper-shopkeeperdetails">
            <div class="title">
        Enter your details</div>
        <form method="POST">
                
                <div class="field">
                <input onChange={handleChange} type="text" required name="shopName" value={input.shopName}/>
                <label>Shop Name</label>
                </div>
                <div class="field">
                <input onChange={handleChange} type="text" required name="shopkeeperName" value={input.shopkeeperName}/>
                <label>Shopkeeper Name</label>
                </div>
                <div class="field">
                    <input onChange={handleChange}  type="number" required name="shopkeeperID" id="shopkeeperID"  value={input.shopkeeperID} />
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

export default ShopkeeperDetails;
