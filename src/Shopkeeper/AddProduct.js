import "./AddProduct.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import HeaderShopkeeper from "../Header/HeaderShopkeeper"

function AddProduct() {

  const [input, setInput] = useState({
    customerID: '',
    customerName: '',
    contactNo: '',
    email: '',
    address: '',
    productName: '',
    productID: '',
    date: ''
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

  function handleClick(event){
    event.preventDefault();
    console.log(input);
     const newProduct = {
       customerID: input.customerID,
       customerName: input.customerName,
       contactNo: input.contactNo,
       email: input.email,
       address: input.address,
       productName: input.productName,
       productID: input.productID,
       date: input.date
     }

     axios.post('http://localhost:3001/addproduct', newProduct)
  }


  return (
    <div className="customer-form">
      <HeaderShopkeeper/>
      <div class="wrapper-product">
        <div class="title">Customer's Product Details</div>
        <form class="addproduct">
        
          <div class="customer">
            <h3 style={{ color: "black" }}>Customer Details</h3>

            <div class="field">
              <input onChange={handleChange} type="text" required name="customerID" value={input.customerID}/>
              <label>Customer ID</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="customerName" value={input.customerName}/>
              <label>Customer Name</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="number" required pattern=".{10}" name="contactNo" value={input.contactNo}/>
              <label>Contact No.</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="email" required name="email" value={input.email}/>
              <label>Email</label>
            </div>

            <div class="field address">
              <input onChange={handleChange} type="text" required name="address" value={input.address}/>
              <label>Address</label>
            </div>
          </div>

          <div class="product1">
            <h3 style={{ color: "black" }}>Product Details</h3>

            <div class="field">
              <input onChange={handleChange} type="text" required name="productName" value={input.productName}/>
              <label>Product Name</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="text" required name="productID" value={input.productID}/>
              <label>Product ID</label>
            </div>

            <div class="field">
              <input onChange={handleChange} type="date" required name="date" value={input.date}/>
              <label>Warranty Date</label>
            </div>
          </div>
          

          <div class="field">
            <input onClick={handleClick} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
