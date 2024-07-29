const express = require('express');
const app = express();
const PORT = 3000;
const urlRoute = require("./routes/url");
const {connecttomongodb} = require("./connect");

connecttomongodb("mongodb://localhost:27017/short-url")
.then(()=> console.log("connected succesfully"));

app.use("/url",urlRoute);  
app.listen(PORT,() => console.log(`Server Started at port: ${PORT}`))     