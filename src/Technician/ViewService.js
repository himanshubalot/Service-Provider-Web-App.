import "../Shopkeeper/Request.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderTechnician from "../Header/HeaderTechnician"



function ViewService() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  //var s3 =  `/message/${serviceID}`;
  console.log(s2);
  const [assigns, setAssigns] = useState([
    {
     
      serviceID: "",
      technicianID:""
      
    },
  ]);

  useEffect(() => {
    
      fetch("/viewservice")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setAssigns(jsonRes));
    
  });


  const [input, setInput] = useState({
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

  const handleClick = async (event) =>{
    event.preventDefault();
    console.log(input);
     const newAssign = {
       serviceID:input.serviceID,
       technicianID:input.technicianID
     }
    }


 // const [input, setInput] = useState({
    
  //})


  

    
  

 // const handleClick = async (event) =>{
  //  event.preventDefault();
   // console.log(input);
    // const newAssign = {
     //  serviceID:input.serviceID,
      // technicianID:input.technicianID
    // }
    


   



  return (

    <div className="request">
    <HeaderTechnician/>
    {assigns.filter((assign) => {
      if(assign.technicianID.includes(s2)){
        return assign
      }
    }).map((assign) => (

    
      <div className="request-card">
        <div style={{ display: "flex", justifyContent: "left" }}>
          <div>
            <p>ServiceID : {assign.serviceID}</p>
            
          </div>
          
        </div>

        <div>
          
          
          <p style={{ display: "flex" }}>
            <Link to= {`/viewrequest/`+ `${assign.serviceID}`}><button
              type="button"
              class="btn btn-warning"
              style={{ borderRadius: "10px", fontWeight: "600" }}
            >
              Next
            </button>
            </Link>
          </p>
         

          
        </div>
      </div>
    ))}
  </div>
  
    );
}

export default ViewService;
