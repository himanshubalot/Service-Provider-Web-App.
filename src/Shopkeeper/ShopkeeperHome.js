import HeaderShopkeeper from "../Header/HeaderShopkeeper";
function ShopkeeperHome() {

  const s1 = window.location.href;
  var s2 = s1.substr(s1.length - 5);
  console.log(s2);


  return (
    <div className="Home container">
      <HeaderShopkeeper/>
        <h2>Welcome to our Shopkeeper Home Page</h2>
    <p style={{marginTop:"20px" }}>You can book your desired home service like 
electrician, plumber, carpenter, cleaner, painter, AC repair, Washing machine repair, 
and so many other services which serve directly to your door step in your desired 
timeslot and on affordable prices. In this way, it makes your life 
easy and full of comfort. Customer trust and safety is our profit so we have strict 
criteria for our vendors and supportive staff who are professionals and authenticated 
and verified

We are available 24*7 to assist you any time anywhere.

Our Technicians
We know the value of customer and their relation with us so we used to maintain 
our contact through our customer for regular inspection of services that we had 
provide already.

Our technicians are highly skilled well equipped and also verified by in this way 
we also take care of our customer and provide comfort and safe zone with trust and 
happiness.

    </p>  
    </div>
  );
}

export default ShopkeeperHome;
