import "./ShopkeeperDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderShopkeeper from "../Header/HeaderShopkeeper";

function AssignTechnician() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);

  const history = useHistory();
  const [input, setInput] = useState({
    serviceID:'',
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

   function handleClick(event){
     event.preventDefault();
     console.log(input);
     const newAssign = {
       serviceID:input.serviceID,
       technicianID: input.technicianID
     }

     axios.post('http://localhost:3001/assigntechnician', newAssign)
    } 

  return (
    
        <div className="wrapper-shopkeeperdetails">
            <div class="title">
        Assign Technician</div>
        <form method="POST">

              <div class="field">
                <input onChange={handleChange} type="text" required name="serviceID" value={input.serviceID}/>
                <label>service ID</label>
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

export default AssignTechnician;
