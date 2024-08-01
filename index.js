const express = require('express');
const app = express();
const URL = require('./models/url');
const PORT = 3000;
const urlRoute = require("./routes/url");
const {connectTomongoDB} = require("./connect");

connectTomongoDB("mongodb://localhost:27017/short-url")
.then(()=> console.log("connected succesfully"));

app.use(express.json());
app.get('/:shortid',async (req,res)=>{
   const shortid = req.params.shortid;
   const entry = await URL.findOneAndUpdate(
  {
    shortid,
  },{
    $push:{
      visiteHistory: {
        timestamp : Date.now(),
      },
    },
  }
   );
   res.redirect(entry.redirectURL);
})
app.use("/url",urlRoute);  
app.listen(PORT,() => console.log(`Server Started at port: ${PORT}`))     