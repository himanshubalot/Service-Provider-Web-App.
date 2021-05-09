import "../Shopkeeper/Request.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderCustomer from "../Header/HeaderCustomer";

function ViewShopkeeperDetails() {
  const [shopkeeperdetails, setShopkeeperDetails] = useState([
    {
      shopName: "",
      shopkeeperName: "",
      shopkeeperID: ""
    },
  ]);

  useEffect(() => {
    fetch("/viewshopkeeperdetails")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setShopkeeperDetails(jsonRes));
  });

  const [searchTerm, setSearchTerm] = useState("")

  return (

    

    <div className="product">
      <HeaderCustomer/>
      <input class="search" type="text" placeholder="Search from Shop Name" onChange={event => {setSearchTerm(event.target.value)}}/>
      {shopkeeperdetails.filter((val) => {
        if(searchTerm == ""){
          return val
        } else if(val.shopName.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val, key) => (
        <div className="request-card" key={key}>
          <div style={{ display: "flex", justifyContent: "center"}}>
            
              <span style={{marginLeft:"200px", marginRight:"80px"}}>Shop Name : {val.shopName}</span>
              <span style={{marginRight:"80px"}}>Shopkeeper Name : {val.shopkeeperName}</span>
              <span>Shopkeeper ID : {val.shopkeeperID}</span>
            
          </div>
         
              
        </div>


             
            
      ))}
    </div>
  );
}

export default ViewShopkeeperDetails;
