import "./FeedbackForm.css";
import React, {useState} from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderCustomer from "../Header/HeaderCustomer";


function FeedbackForm() {
    const [input, setInput] = useState({
        serviceID: '',
        shopkeeperID : '',
        exp: '',
        comment: ''
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
         const newFeedback = {
           
           serviceID: input.serviceID,
           shopkeeperID: input.shopkeeperID,
           exp: input.exp,
           comment: input.comment
         }
    
         axios.post('http://localhost:3001/feedbackform', newFeedback)
      }
  
  return (
    <div>
      <HeaderCustomer/>
        <div class="wrapper-feedbackform">
          
        <div class="title">
            Customer Feedback Form
        </div>


        <form>
            <div class="field2">
                <input onChange={handleChange} type="text" required name="serviceID" value={input.serviceID}/>
                <label>Service ID</label>
            </div>

            <div class="field2">
                <input onChange={handleChange} type="text" required name="shopkeeperID" value={input.shopkeeperID}/>
                <label>Shopkeeper ID</label>
            </div>

            <div class="experience">
                <p style={{ color: "black" }}>What would you say about your experience?</p>
                <input onChange={handleChange} type="radio" id="bad" name="exp" value="bad"/>
                <label for="male">Bad</label><br/>
                <input onChange={handleChange} type="radio" id="average" name="exp" value="average"/>
                <label for="male">Average</label><br/>
                <input onChange={handleChange} type="radio" id="good" name="exp" value="good"/>
                <label for="male">Good</label><br/>
                <input onChange={handleChange} type="radio" id="excellent" name="exp" value="excellent"/>
                <label for="male">Excellent</label><br/>
            </div>
            
            <div class="field">
                <input onChange={handleChange} type="text" required name="comment" value={input.comment}/>
                <label>Comment ...</label>
            </div>

            <div class="field3">
               <Link to = "/customerhome"> <input onClick={handleClick} type="submit" value="Submit"/></Link>
            </div>
   
         </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
