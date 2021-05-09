import "./ComplaintForm.css";
import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderCustomer from "../Header/HeaderCustomer";


function ComplaintForm() {
    const [input, setInput] = useState({
        serviceID: '',
        shopkeeperID: '',
        description: ''
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
         const newComplaint = {
           serviceID: input.serviceID,
           shopkeeperID: input.shopkeeperID,
           description: input.description
         }
    
         axios.post('http://localhost:3001/complaintform', newComplaint)
      }

  
  return (
    <div>
        <HeaderCustomer/>
        <div class="wrapper-complaintform">
        <div class="title">
            Register Complaint
        </div>

        <form>
            <div class="field">
                <input onChange={handleChange} type="text" required name="serviceID" value={input.serviceID}/>      
                <label>Service ID</label>
            </div>
      
            <div class="field">
                <input onChange={handleChange} type="text" required name="shopkeeperID" value={input.shopkeeperID}/>
                <label>Shopkeeper ID</label>
            </div>

            <div class="field" id="complaint">
                <input onChange={handleChange} type="text" required name="description" value={input.description}/>
                <label>Complaint Description</label>
            </div>

            <div class="field">
                <Link to="/customerhome" ><input onClick={handleClick} type="submit" value="Submit"/></Link>
            </div>

        </form>
    </div>
    </div>
  );
}

export default ComplaintForm;
