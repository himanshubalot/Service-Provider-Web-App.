import "./Request.css";
import React, { useEffect, useState } from "react";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"

function TechnicianDetails() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);

  const [technicians, setTechnicians] = useState([
    {
      shopkeeperID:"",
      technicianID: "",
      technicianName: "",
      contactNo: "",
      email: "",
      workingField: "",
      experience: ""
    },
  ]);

  useEffect(() => {
    fetch("/techniciandetails")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTechnicians(jsonRes));
  });

  return (
    <div className="request">
      <HeaderShopkeeper/>
      {technicians.filter((technician) => {
        if(technician.shopkeeperID.includes(s2)){
          return technician
        }
      }).map((technician) => (
        <div className="request-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>Technician ID : {technician.technicianID}</p>
              <p>Contact No : {technician.contactNo}</p>
              <p>Working Field : {technician.workingField}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>Technician Name : {technician.technicianName}</p>
              <p>Email : {technician.email}</p>
              <p>Past Experience : {technician.experience}</p>
            </div>
          </div>

          <div>
            <p style={{ visibility: "hidden" }}>Hello</p>
            <p style={{ display: "flex" }}>
              
              
            </p>
            <p style={{ visibility: "hidden" }}>Hello</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechnicianDetails;
