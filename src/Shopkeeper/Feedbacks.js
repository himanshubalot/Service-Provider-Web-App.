import './Feedbacks.css';
import React, { useEffect, useState } from "react";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"




function Feedbacks() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);
  const [feedbacks, setFeedbacks] = useState([
    {
      serviceID: "",
      shopkeeperID: "",
      exp: "",
      comment: ""
    },
  ]);

  useEffect(() => {
    fetch("/feedback")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setFeedbacks(jsonRes));
  });


    return (
      <div className="feedback">
          <HeaderShopkeeper/>
          <h4 style={{textAlign:"center", fontWeight:"700"}}>Feedbacks</h4>

          {feedbacks.filter((feedback) => {
        if(feedback.shopkeeperID.includes(s2)){
          return feedback
        }
      }).map((feedback) => (
     
        <div className="feedback-card">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>ServiceID : {feedback.serviceID}</p>
              <p>Comments : {feedback.comment}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>exp: {feedback.exp}</p>
            </div>
          </div>

          
        </div>
      ))}
          
          
          
        </div>  
      
    );
  }
  
  export default Feedbacks;
  