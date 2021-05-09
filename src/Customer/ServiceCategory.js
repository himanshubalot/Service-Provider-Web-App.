import "./ServiceCategory.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HeaderCustomer from "../Header/HeaderCustomer";

function ServiceCategory() {

    const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  var s3 =  `/customerform/${s2}`;

    return (
      <div className="service-category">
          <HeaderCustomer/>
          <h2 style={{textAlign:"center"}}>Select Service Category</h2>
    <div class="wrapper-servicecategory">
       

        
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <Link to={s3}><img src="/images/ac-services.png" style={{marginTop:"6px", height:"70%",width:"100%"}}/></Link>

                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px",
                            marginLeft: "7px"}}>
                                AC
                            </div>
                            
                        </div> 
                    </div>
                    
                </div>
            

            
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <Link to={s3}><img src="/images/Carpenter.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px",marginLeft: "-25px"}}>
                                Carpenter 
                            </div>
                        </div>
                    </div>
                   
                </div> 
          
                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}><img src="/images/cleaning.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px",marginLeft: "-20px"}}>
                                Cleaning 
                            </div>
                        </div>
                    </div>
                   
                </div> 
           
                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}><img src="/images/computer-repair.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px",marginLeft: "-25px"}}>
                                Computer 
                            </div>
                        </div>
                    </div>
                   
                </div> 
           
                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}><img src="/images/electrician.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft: "-28px"}}>
                                Electrician
                            </div>
                        </div>
                    </div>
                   
                </div> 
           
                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}> <img src="/images/geyser.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft: "-10px"}}>
                                Geyser 
                            </div>
                        </div>
                    </div>
                   
                </div> 

                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}> <img src="/images/microwave-oven.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft: "1px"}}>
                                Oven
                            </div>
                        </div>
                    </div>
                   
                </div> 

                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}>  <img src="/images/painting.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft:"-17px"}}>
                                Painting
                            </div>
                        </div>
                    </div>
                   
                </div> 

                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}> <img src="/images/Plumber.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft:"-17px"}}>
                                Plumber
                            </div>
                        </div>
                    </div>
                   
                </div> 

                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}> <img src="/images/refrigerator.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft:"-36px"}}>
                                Refrigerator
                            </div>
                        </div>
                    </div>
                   
                </div> 

                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}><img src="/images/tv.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft:"7px"}}>
                                TV
                            </div>
                        </div>
                    </div>
                   
                </div> 
                
                <div class="tileContainer">
                    <div class="tileComponent1">
                    <Link to={s3}> <img src="/images/water-purifier.png" style={{marginTop:"6px", height:"70%", width:"100%"}}/></Link>


                        <div class="tileComponent2">
                            <div class="componentHeading" style={{marginTop: "8px", marginLeft:"-17px"}}>
                                Purifier
                            </div>
                        </div>
                    </div>
                   
                </div> 

        </div>

      </div>
    );
  }
  
  export default ServiceCategory;
  