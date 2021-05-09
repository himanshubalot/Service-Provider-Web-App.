import "./Request.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"
//import { request } from "express";



function Request() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  //var s3 =  `/message/${serviceID}`;
  console.log(s2);
  const [requests, setRequests] = useState([
    {
      customerID: "",
      customerName: "",
      contactNo: "",
      email: "",
      address: "",
      city: "",
      productName: "",
      productID: "",
      date: "",
      description: "",
      shopkeeperName: "",
      shopkeeperID: "",
      serviceID:""
      
    },
  ]);

  useEffect(() => {
    
      fetch("/request")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setRequests(jsonRes));
    
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
     const newRequest = {
       
       technicianID:input.technicianID
     }
    }


   
    const [searchTerm, setSearchTerm] = useState("")



  return (
    <div className="request">
      <HeaderShopkeeper/>
      {/* <input class="search" type="text" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}}/> */}
     
 
      {requests.filter((request) => {
        if(request.shopkeeperID.includes(s2)){
          return request
        }
      }).map((request) => (

      
        <div className="request-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>CustomerID : {request.customerID}</p>
              <p>Contact No : {request.contactNo}</p>
              <p>Address : {request.address}</p>
              <p>Product : {request.productName}</p>
              <p>RequestDate : {request.date}</p>
              <p>Description : {request.description}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>Customer Name : {request.customerName}</p>
              <p>Email : {request.email}</p>
              <p>City : {request.city}</p>
              <p>ProductID : {request.productID}</p>
              <p>ServiceID : {request.serviceID}</p>
              
            </div>
          </div>

          <div>
            <p style={{ visibility: "hidden" }}>Hello</p>
            <p style={{ display: "flex" }}>
              <Link to= {`/message/`+ `${request.serviceID}`}><button
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600" }}
              >
                Accept
              </button>
              </Link>
            </p>
            
            <p style={{ display: "flex" }}>
              <Link to= {`/assigntechnician/`+ `${request.serviceID}`}><button
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600" }}
              >
                Assign technician
              </button>
              </Link>
            </p>

            <p style={{ display: "flex" }}>
              <Link to= {`/techstatus/`+ `${request.serviceID}`}><button
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600" }}
              >
                View technician Status
              </button>
              </Link>
            </p>
           

            
          </div>
        </div>
      ))}
      
   
    </div>
      );
}

export default Request;
