import "./SignUp.css";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const history = useHistory();
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    user: ''
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

  // function handleClick(event){
  //   event.preventDefault();
  //   console.log(input);
  //   const newRegister = {
  //     username: input.username,
  //     email: input.email,
  //     password: input.password,
  //     user: input.user
  //   }

    //  axios.post('http://localhost:3001/signup', newRegister).then(
    //    res => {
    //      console.log(res)
    //    }
    //  ).catch(
    //    err => {
    //      console.log(err)
    //    }
    //  )
    
    const handleClick = async (event) => {
      event.preventDefault();
      const newRegister = {
            username: input.username,
             email: input.email,
             password: input.password,
             user: input.user
           }
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        username:input.username, email:input.email, password:input.password, user:input.user
      })
    })
    const data = await res.json();
    console.log(data);
          
          if(res.status === 422 || !data){
            window.alert("Invalid Registration");
          } 
          else if(res.status === 201){
            window.alert("Registered successfully");
            history.push("/customerdetails");
          }
          else if(res.status === 202){
            window.alert("Registered successfully");
            history.push("/shopkeeperdetails");
          }
          else {
            window.alert("Registered successfully");
            history.push("/technicianinfo");
          }

    
    
  }


  return (
    <div>
      <div class="wrapper-signup">
        <div class="title">Sign Up</div>
        <form method="POST">
          <div class="field">
            <input onChange={handleChange} type="text" required name="username" value={input.username}/>
            <label>User Name</label>
          </div>
          <div class="field">
            <input onChange={handleChange} type="text" required name="email" value={input.email}/>
            <label>Email Address</label>
          </div>
          <div class="field">
            <input onChange={handleChange} type="password" required name="password" value={input.password}/>
            <label>Password</label>
          </div>
          <div class="field">
            <select onChange={handleChange} name="user" id="user" required value={input.user}>
              <option value="" disabled selected hidden>
                Select User
              </option>
              <option value="customer">Customer</option>
              <option value="shopkeeper">Shopkeeper</option>
              <option value="technician">Technician</option>
            </select>
          </div>
          <div class="content">
            <div class="checkbox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div class="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div class="field">
            <input onClick={handleClick} type="submit" value="SignUp" />
          </div>
          <div class="signup-link">
            Already a member <Link to="/login">Login now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
