import "../Shopkeeper/Request.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderShopkeeper from "../Header/HeaderShopkeeper";

function RegisteredTechnician() {
  const [registeredtechnician, setRegisteredTechnician] = useState([
    {
      technicianName: "",
      technicianID: ""
    },
  ]);

  useEffect(() => {
    fetch("/registeredtechnician")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setRegisteredTechnician(jsonRes));
  });

  const [searchTerm, setSearchTerm] = useState("")

  return (

    

    <div className="product">
      <HeaderShopkeeper/>
      <input class="search" type="text" placeholder="Search from Technician Name" onChange={event => {setSearchTerm(event.target.value)}}/>
      {registeredtechnician.filter((val) => {
        if(searchTerm == ""){
          return val
        } else if(val.technicianName.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val, key) => (
        <div className="request-card" key={key}>
          <div style={{ display: "flex", justifyContent: "center"}}>
            
              <span style={{marginLeft:"200px", marginRight:"80px"}}>Technician Name : {val.technicianName}</span>
              <span style={{marginRight:"80px"}}>Technician ID : {val.technicianID}</span>
              
            
          </div>
         
              
        </div>


             
            
      ))}
    </div>
  );
}

export default RegisteredTechnician;
