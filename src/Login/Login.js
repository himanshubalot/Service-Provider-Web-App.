import './Login.css';
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function Login(){
  const history = useHistory();

  const [input, setInput] = useState({
         email: '',
         password: ''
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
           const handleClick = async (event) => {
            event.preventDefault();
            console.log(input);
            const newLogin = {
                   email: input.email,
                   password: input.password
                 }
          const res = await fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              email:input.email, password:input.password
            })
          });

          const data = res.json();
          
          if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
          } 
           else if(res.status === 200){
             window.alert("Logged in successfully");
             console.log(data);
             history.push("/customerid")
           }
           else if(res.status === 201){
             window.alert("Logged in successfully");
             history.push("/shopkeeperid")
           }
          else{
            window.alert("Logged in successfully");
            history.push("/technicianid")
          }
          
        }

    // const [input, setInput] = useState({
    //     email: '',
    //     password: ''
    //   })
    
    //   function handleChange(event){
    //     const {name, value} = event.target;
    
    //     setInput(prevInput =>{
    //       return {
    //         ...prevInput,
    //         [name]: value
    //       }
    //     })
    //   }
    
    //   function handleClick(event){
    //     event.preventDefault();
    //     console.log(input);
    //     const newLogin = {
    //       email: input.email,
    //       password: input.password

    //     }
    
        // axios.post('http://localhost:3001/login', newLogin).then(
        //   res => {
        //     console.log(res)
        //     alert(res.data.message)
        //   }
        // ).catch(
        //   err => {
        //     console.log(err)
        //   }
        // )
      // }

    return(
       <div>
           <div class="wrapper-login">
            <div class="title">
        Login</div>
        
        <form method="POST">
                
                <div class="field">
                <input onChange={handleChange} type="text" required name="email" value={input.email}/>
                <label>Email Address</label>
                </div>
                <div class="field">
                <input onChange={handleChange} type="password" required name="password" value={input.password}/>
                <label>Password</label>
                </div>
                <div class="content">
                <div class="checkbox">
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">Remember me</label>
                </div>
        <div class="pass-link">
        <a href="#">Forgot password?</a></div>
        </div>
        <div class="field">
                <Link to="/"><input onClick={handleClick} type="submit" value="Login"/></Link>
                </div>
        <div class="signup-link">
        Not a member? <Link to="/signup">Signup now</Link></div>
        </form>
        </div>
       </div> 
    );
}

export default Login;