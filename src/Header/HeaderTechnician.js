import './Header.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HeaderTechnician() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  var s3 =  `/technicianhome/${s2}`;
  var s4 =  `/viewservice/${s2}`;
  var s5 =  `/${s2}`;
  
   
  return (
    <div className="Header">
      <div class="main-header">
    <h4 class="logo">Service Provider</h4>
    
    <div class="menu">
    <Link to={s3}><h5>Home</h5></Link>
    <Link to={s3}><h5>About</h5></Link>
    <Link to={s4}><h5>View Service</h5></Link>
    <Link to="/login"><h5>Logout</h5></Link>
    </div>
    
  </div>
    </div>
    
  );
}

export default HeaderTechnician;
