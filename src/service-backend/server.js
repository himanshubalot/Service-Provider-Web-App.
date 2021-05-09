const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");


// API Config
const app = express();


// Middlewares
app.use(cors())
app.use(express.json())

//DB Config
mongoose.connect("mongodb+srv://himanshubalot:himanshubalot@cluster0.lfhuh.mongodb.net/registration", {
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
    useCreateIndex : true
});


//API Endpoints
 //app.get("/", (req, res) => {
//     res.render("CustomerHome")
// });

 app.get("/login", (req, res) => {
     res.render("Login")
 });

  app.get("/signup", (req, res) => {
      res.render("SignUp")
  });

// app.get("/customerform", (req, res) => {
//     res.render("CustomerForm")
// });

app.use("/", require("./routes/authRoute"));
app.use("/", require("./routes/requestRoute"));
app.use("/", require("./routes/complaintRoute"));
app.use("/", require("./routes/feedbackRoute"));
app.use("/", require("./routes/productRoute"));
app.use("/", require("./routes/technicianRoute"));
app.use("/", require("./routes/messageRoute")); 
app.use("/", require("./routes/shopkeeperdetailsRoute"));
app.use("/", require("./routes/customerdetailsRoute"));
app.use("/", require("./routes/assign"));
app.use("/", require("./routes/techniciandetailsRoute"));
app.use("/", require("./routes/otpRoute"));
app.use("/", require("./routes/idRoute"));
app.use("/", require("./routes/confirmRoute"));

// Listener 
app.listen(3001,() =>{
    console.log(`server is running at port no 3001`);
});