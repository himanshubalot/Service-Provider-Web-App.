import "../Shopkeeper/Request.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderCustomer from "../Header/HeaderCustomer";

function RequestHistory() {
  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
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
      serviceID:""
    },
  ]);


  useEffect(() => {
    fetch("/requesthistory")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setRequests(jsonRes));
  });

  
  return (
    <div className="request">
      <HeaderCustomer/>
      {requests.filter((request) => {
        if(request.customerID.includes(s2)){
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

     <div style={{marginRight:"50px", marginTop:"70px"}}>
       <Link to={`/status/`+ `${request.serviceID}`}>
     <button 
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600" }}
              >
                View Status
              </button>
              </Link>
     </div>
   </div>
 ))}


          
    </div>
  );
}

export default RequestHistory;





 