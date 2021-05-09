import "./Home.css";
import Login from "./Login/Login.js";
import HeaderHome from "./Header/HeaderHome.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home() {
    return (
      <div className="Home container">
        <Login/>   
      </div>
    );
  }
  
  export default Home;
  