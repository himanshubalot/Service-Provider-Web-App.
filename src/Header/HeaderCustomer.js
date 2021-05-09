import './Header.css';
import Dropdown from 'react-dropdown';
import {useHistory} from "react-router-dom";
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HeaderCustomer() {


  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  var s3 =  `/servicecategory/${s2}`;
  var s4 =  `/requesthistory/${s2}`;
  var s5 =  `/feedbackform/${s2}`;
  var s6 =  `/complaintform/${s2}`;
  var s7 =  `/customerhome/${s2}`;
  var s9 =  `/viewshopkeeperdetails/${s2}`;
  var s8 =  `/about/${s2}`;
  

  const options = [
    <Link to={s3}>Request Service</Link>, <Link to={s4}>Request History</Link>, <Link to={s5}>Feedback</Link>, <Link to={s6}>Complaint</Link> ,
    <Link to={s9}>Shopkeeper details</Link>
  ];

    
    
  return (
    <div className="Header" marginTop="100px !important">
      <div class="main-header" >
    <h4 class="logo">Service Provider</h4>
    
    <div class="menu">
    <Link to={s7}><h5>Home</h5></Link>
    
    <h5><Dropdown style= {{marginLeft:"0px"}} options={options} placeholder="Services" /></h5>
    <Link to={s8}><h5>About us</h5></Link>
    <Link to='/'><h5>Logout</h5></Link>
    </div>
    
  </div>
    </div>
    
  );
}

export default HeaderCustomer;
