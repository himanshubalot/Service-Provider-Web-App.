import "../Shopkeeper/ShopkeeperDetails.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderTechnician from "../Header/HeaderTechnician";

function Message() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);

  const history = useHistory();
  const [input, setInput] = useState({
    serviceID:'',
    message: ''
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
     const newConfirm = {
       serviceID:input.serviceID,
       message: input.message
     }

      axios.post('http://localhost:3001/confirmpage', newConfirm)
    } 

  return (
    
        <div className="wrapper-shopkeeperdetails">
            
            <div class="title">
        Send Confirmation</div>
        <form method="POST">

              <div class="field">
                <input onChange={handleChange} type="text" required name="serviceID" value={input.serviceID}/>
                <label>service ID</label>
               </div>
                
                <div class="field">
                <input onChange={handleChange} type="text" required name="message" value={input.message}/>
                <label>Type message...</label>
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

export default Message;
