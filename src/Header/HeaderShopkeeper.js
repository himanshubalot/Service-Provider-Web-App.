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



function HeaderShopkeeper() {

  const history = useHistory();

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  var s3 =  `/addproduct/${s2}`;
  var s4 =  `/productdetails/${s2}`;
  var s5 =  `/request/${s2}`;
  var s6 =  `/feedback/${s2}`;
  var s7 =  `/complaint/${s2}`;
  var s8 =  `/addtechnician/${s2}`;
  var s9 =  `/techniciandetails/${s2}`;
  var s10 =  `/shopkeeperhome/${s2}`;
  var s11 =  `/registeredtechnician/${s2}`;
  console.log(s2);


    const options = [

      
      <Link to= {s3}>Add Product</Link>,<Link to= {s4}>Product Details</Link>, <Link to= {s5}>Requests</Link>, <Link to={s6}>Feedback</Link>, <Link to={s7}>Complaints</Link>
      ];
 
      const options2 = [
        <Link to= {s8}>Add technician</Link> ,
        <Link to={s9}>Details</Link>,
        <Link to={s11}>Registered Technician</Link>  
      ];

      

  return (
    <div className="Header">
      <div class="main-header">
    <h4 class="logo">Service Provider</h4>
    
    <div class="menu">
    <Link to= {s10}><h5>Home</h5></Link>
   
    <h5><Dropdown style= {{marginLeft:"0px"}} options={options} placeholder="Customer" /></h5>

    <h5><Dropdown style= {{marginLeft:"25px"}} options={options2} placeholder="Technician" /></h5>
    
    
    <Link to='/'><h5>Logout</h5></Link>
    </div>
    
  </div>
    </div>
    
  );
}

export default HeaderShopkeeper;
