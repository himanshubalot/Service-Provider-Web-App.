import "./TechnicianInfo.css";
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
       alert('Your Technician ID:' + randomNum);
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
    technicianName: '',
    technicianID: ''
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
     const newTechnicianDetails = {
       technicianName: input.technicianName,
       technicianID: input.technicianID
     }

     const res =  await fetch("/technicianinfo", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        technicianName: input.technicianName,
       technicianID: input.technicianID
      })
    })
    console.log(input);
    const data = await  res.json();
    console.log(data.technicianID);
          
          if(res.status === 217){
            window.alert("Account created successfully");
            history.push("/headertechnician?" + data.technicianID);
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
                <input onChange={handleChange} type="text" required name="technicianName" value={input.technicianName}/>
                <label>Technician Name</label>
                </div>
                <div class="field">
                <input onChange={handleChange} type="text" required name="technicianID" value={input.technicianID}/>
                <label>Technician ID</label>
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
