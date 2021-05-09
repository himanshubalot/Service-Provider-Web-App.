import "../Shopkeeper/Request.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderCustomer from "../Header/HeaderCustomer";

function Status() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);
  const [messages, setMessages] = useState([
    {
      message: "",
      serviceID:""
    },
  ]);

  useEffect(() => {
    fetch("/status")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setMessages(jsonRes));
  });

  return (
    <div className="request">
      <HeaderCustomer/>
      {messages.filter((message) => {
        if(message.serviceID.includes(s2)){
          return message
        }
      }).map((message) => (
      
        <div className="request-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>Status : {message.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status;
