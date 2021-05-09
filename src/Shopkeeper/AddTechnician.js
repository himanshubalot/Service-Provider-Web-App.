import "./AddTechnician.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function AddTechnician() {

  const [input, setInput] = useState({
    shopkeeperID: '',
    technicianID: '',
    technicianName: '',
    contactNo: '',
    email: '',
    workingField: '',
    experience: ''
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
     const newTechnician = {
       shopkeeperID: input.shopkeeperID,
       technicianID: input.technicianID,
       technicianName: input.technicianName,
       contactNo: input.contactNo,
       email: input.email,
       workingField: input.workingField,
       experience: input.experience
     }

     axios.post('http://localhost:3001/addtechnician', newTechnician)
  }


  return (
    <div className="customer-form">
      <HeaderShopkeeper/>
      <div class="wrapper-technician">
        <div class="title">Technician Details Form</div>
        <form class="addtechnician">
        
          <div class="customer">
            <h3 style={{ color: "black" }}>Technician Details</h3>

            <div class="field">
              <input onChange={handleChange} type="text" required name="shopkeeperID" value={input.shopkeeperID}/>
              <label>Shopkeeper ID</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="technicianID" value={input.technicianID}/>
              <label>Technician ID</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="technicianName" value={input.technicianName}/>
              <label>Technician Name</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="number" required pattern=".{10}" name="contactNo" value={input.contactNo}/>
              <label>Contact No.</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="email" required name="email" value={input.email}/>
              <label>Email</label>
            </div>
            <div class="field">
              <input onChange={handleChange} type="text" required name="workingField" value={input.workingField}/>
              <label>Working Field</label>
            </div>
            <div class="field">
              <input onChange={handleChange} type="text" required name="experience" value={input.experience}/>
              <label>Past Experience</label>
            </div>

          </div>

          <div class="field">
            <input onClick={handleClick} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTechnician;
