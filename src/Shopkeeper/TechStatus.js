import "../Shopkeeper/Request.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Confirm from "../service-backend/models/dbconfirm";
import HeaderShopkeeper from "../Header/HeaderShopkeeper";
import HeaderCustomer from "../Header/HeaderCustomer";

function TechStatus() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);
  const [confirms, setConfirms] = useState([
    {
      message: "",
      serviceID:""
    },
  ]);

  useEffect(() => {
    fetch("/techstatus")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setConfirms(jsonRes));
  });

  return (
    <div className="request">
        <HeaderShopkeeper/>
      {confirms.filter((confirm) => {
        if(confirm.serviceID.includes(s2)){
          return confirm
        }
      }).map((confirm) => (
      
        <div className="request-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>Status : {confirm.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStatus;
