import "./App.css";
import Home from "./Home.js";
import Login from "./Login/Login.js";
import Request from "./Shopkeeper/Request.js";
import RequestHistory from "./Customer/RequestHistory"
import SignUp from "./Login/SignUp.js";
import TechnicianDetails from "./Shopkeeper/TechnicianDetails.js";
import Footer from "./Footer/Footer";
import Feedbacks from "./Shopkeeper/Feedbacks";
import CustomerForm from "./Customer/CustomerForm";
import Complaints from "./Shopkeeper/Complaints";
import ServiceCategory from "./Customer/ServiceCategory";
import ShopkeeperHome from "./Shopkeeper/ShopkeeperHome";
import CustomerHome from "./Customer/CustomerHome";
import TechnicianHome from "./Technician/TechnicianHome";
import ViewRequest from "./Technician/ViewRequest";
import Otp from "./Technician/Otp";
import CustomerOTP from "./Customer/CustomerOTP";
import ViewService from "./Technician/ViewService";
import HeaderHome from "./Header/HeaderHome";
import HeaderCustomer from "./Header/HeaderCustomer";
import HeaderShopkeeper from "./Header/HeaderShopkeeper";
import HeaderTechnician from "./Header/HeaderTechnician";
import CustomerDetails from "./Customer/CustomerDetails";
import RegisteredTechnician from "./Shopkeeper/RegisteredTechnician";
import ShopkeeperDetails from "./Shopkeeper/ShopkeeperDetails"
import FeedbackForm from "./Customer/FeedbackForm";
import ComplaintForm from "./Customer/ComplaintForm";
import AddProduct from "./Shopkeeper/AddProduct"
import AddTechnician from "./Shopkeeper/AddTechnician"
import ProductDetails from "./Shopkeeper/ProductDetails"
import ViewShopkeeperDetails from "./Customer/ViewShopkeeperDetails"
import Message from "./Shopkeeper/Message"
import Status from "./Customer/Status"
import AssignTechnician from "./Shopkeeper/AssignTechnician"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Technicianinfo from "./Technician/TechnicianInfo" ;
import CustomerID from "./Customer/CustomerID";
import ShopkeeperID from "./Shopkeeper/ShopkeeperID";
import TechnicianID from "./Technician/TechnicianID";
import ConfirmPage from "./Technician/ConfirmPage";
import TechStatus from "./Shopkeeper/TechStatus";

function App() {
  return (
    <div className="App">
      <Router>
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/headershopkeeper">
            <HeaderShopkeeper/>
          </Route>
          <Route path="/headercustomer">
            <HeaderCustomer/>
          </Route>
          <Route path="/headertechnician">
            <HeaderTechnician/>
          </Route>

          <Route path="/customerid">
            <CustomerID/>
          </Route>

          <Route path="/shopkeeperid">
            <ShopkeeperID/>
          </Route>

          <Route path="/technicianid">
            <TechnicianID/>
          </Route>

          <Route path="/confirmpage">
            <ConfirmPage/>
          </Route>

          <Route path="/techstatus">
            <TechStatus/>
          </Route>



          <Route path="/otp">
            <Otp/>
          </Route>

          <Route path="/customerotp">
            <CustomerOTP/>
          </Route>

          <Route path="/registeredtechnician">
            <RegisteredTechnician/>
          </Route>
         
          <Route path="/technicianinfo">
            <Technicianinfo/>
          </Route>

          <Route path="/viewrequest">
            <ViewRequest/>
          </Route>

          <Route path="/viewservice">
            <ViewService/>
          </Route>

          <Route path="/shopkeeperhome">
            <ShopkeeperHome/>
          </Route>
          <Route path="/assigntechnician">
            <AssignTechnician/>
          </Route>
          <Route path="/customerhome">
            <CustomerHome/>
          </Route>
          <Route path="/technicianhome">
            <TechnicianHome/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/customerdetails">
            <CustomerDetails />
          </Route>
          <Route path="/shopkeeperdetails">
            <ShopkeeperDetails />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/techniciandetails">
            <TechnicianDetails />
          </Route>
          <Route path="/customerform">
            <CustomerForm />
          </Route>
          <Route path="/feedbackform">
            <FeedbackForm />
          </Route>
          <Route path="/complaintform">
            <ComplaintForm />
          </Route>
          <Route path="/feedback">
            <Feedbacks />
          </Route>
          <Route path="/complaint">
            <Complaints />
          </Route>
          <Route path="/servicecategory">
            <ServiceCategory />
          </Route>
          <Route path="/requesthistory">
            <RequestHistory />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path="/addtechnician">
            <AddTechnician />
          </Route>
          <Route path="/productdetails">
            <ProductDetails />
          </Route>
          <Route path="/viewshopkeeperdetails">
            <ViewShopkeeperDetails />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
