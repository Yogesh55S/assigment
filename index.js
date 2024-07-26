const express = require("express");
const app = express();
const port = 3000;
const urlRoute = require("./routes/url");
const {connecttomongodb} = require("./connect");

connecttomongodb("mongodb://localhost:27017/short-url")
.then(()=> console.log("conmected succesfully"));

app.use("/url",urlRoute); 
app.listen(port,() => console.log(`Server Started at port: ${port}`))