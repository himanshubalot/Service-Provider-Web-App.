import './Complaints.css';
import React, { useEffect, useState } from "react";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"


function Complaints() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);

  const [complaints, setComplaints] = useState([
    {
      serviceID: "",
      shopkeeperID: "",
      description: ""
    },
  ]);
  

  useEffect(() => {
    fetch("/complaint")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setComplaints(jsonRes));
  });


    return (
      <div className="complaint">
        <HeaderShopkeeper/>
          <h4 style={{textAlign:"center", fontWeight:"700"}}>Complaints</h4>
          {complaints.filter((complaint) => {
        if(complaint.shopkeeperID.includes(s2)){
          return complaint
        }
      }).map((complaint) => (
        <div className="complaint-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>ServiceID : {complaint.serviceID}</p>
              <p>Complaint : {complaint.description}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>ShopkeeperID: {complaint.shopkeeperID}</p>
            </div>
          </div>

         
        </div>
      ))}
          
          
          
        </div>  
      
    );
  }
  
  export default Complaints;
  