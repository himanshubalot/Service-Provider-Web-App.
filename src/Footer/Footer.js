import './Footer.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Footer() {
  return (
    <div className="Footer">
      <div class="main-footer">
    <h5 class="logo-footer">Service Provider</h5>
    
    <div class="menu-footer">
    <Link style={{textDecoration:"none"}}><h6>Home</h6></Link>
   
    <Link style={{textDecoration:"none"}}><h6>Contact us</h6></Link>
    <Link style={{textDecoration:"none"}}><h6>Privacy Policy</h6></Link>
    <Link style={{textDecoration:"none"}}><h6>About us</h6></Link>
    <Link style={{textDecoration:"none"}}><h6>Terms & Conditions</h6></Link>
    </div>
    <div style={{textAlign:"center", marginTop:"20px"}}>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-twitter" style={{marginLeft:"20px"}}></i>
    <i class="fab fa-facebook-f" style={{marginLeft:"20px"}}></i>
    </div>
  </div>
    </div>
    
  );
}

export default Footer;
