import './Header.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HeaderHome() {
    
  return (
    <div className="Header">
      <div class="main-header">
    <h4 class="logo">Service Provider</h4>
    
    <div class="menu">
    <Link to='/'><h5>Home</h5></Link>
    <Link to='/about'><h5>About us</h5></Link>
    <Link to='/login'><h5>Login</h5></Link>
    <Link to='/signup'><h5>Sign Up</h5></Link>
    </div>
    
  </div>
    </div>
    
  );
}

export default HeaderHome;
