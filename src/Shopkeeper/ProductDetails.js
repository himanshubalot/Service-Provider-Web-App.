import "./Request.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"

function ProductDetails() {
  const [products, setProducts] = useState([
    {
      customerID: "",
      customerName: "",
      contactNo: "",
      email: "",
      address: "",
      productName: "",
      productID: "",
      date: "",
    },
  ]);

  useEffect(() => {
    fetch("/productdetails")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setProducts(jsonRes));
  });

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="product">
      <HeaderShopkeeper/>
      <input class="search" type="text" placeholder="Search for warranty date" onChange={event => {setSearchTerm(event.target.value)}}/>
      {products.filter((product) => {
        if(searchTerm == ""){
          return product
        } else if(product.date.includes(searchTerm)){
          return product
        }
      }).map((product, key) => (
        <div className="request-card" key={key}>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div>
              <p>CustomerID : {product.customerID}</p>
              <p>Contact No : {product.contactNo}</p>
              <p>Product : {product.productName}</p>
              <p>Address : {product.address}</p>
            </div>
            <div style={{ marginLeft: "480px", position: "absolute" }}>
              <p>Customer Name : {product.customerName}</p>
              <p>Email : {product.email}</p>
              <p>ProductID : {product.productID}</p>
              <p>Warranty Date : {product.date}</p>
            </div>
          </div>

           <div>
            <p style={{ visibility: "hidden" }}>Hello</p>
            <p style={{ display: "flex" }}>
              <Link to="/message">
              <button
                style={{marginTop:"20px", marginRight:"50px"}}
                type="button"
                class="btn btn-warning"
                style={{ borderRadius: "10px", fontWeight: "600" }}
              >
                Accept
              </button>
              </Link>  
            </p>
            <p style={{ visibility: "hidden" }}>Hello</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
