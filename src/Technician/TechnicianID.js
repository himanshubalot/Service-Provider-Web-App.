import "./TechnicianInfo.css";
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import HeaderShopkeeper from "../Header/HeaderShopkeeper";

function TechnicianID() {

  

  //var x = myFunction();
  const history = useHistory();
  const [input, setInput] = useState({
    //customeName: '',
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
      const newCustomerDetails = {
        
        technicianID: input.technicianID
      }
 
      const res =  await fetch("/technicianid", {
       method: "POST",
       headers: {
         "Content-Type" : "application/json"
       },
       body: JSON.stringify({
          technicianID:input.technicianID
       })
     })
     console.log(input);
     const data = await  res.json();
     console.log(data.technicianID);
           
           if(res.status === 211 ){
           //  window.alert("Account created successfully");
             history.push("/headertechnician?" + data.technicianID);
           } 
           else if(res.status === 424){
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
                    <input onChange={handleChange} type="number" required name="technicianID" id="technicianID" value={input.technicianID}/>
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

export default TechnicianID;
