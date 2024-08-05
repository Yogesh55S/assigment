const express = require("express");
const app = express();
const URL = require('./models/url');
const PORT = 3000;
const urlRoute = require("./routes/url");
const staticrout = require("./routes/staticrouter");
const {connectTomongoDB} = require("./connect");
const path = require('path');

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));
/*app.get("/test",async(req,res)=>{
  const allUrls = await URL.find({});
  return res.render('home',{
    urls: allUrls,
    name: 'yogesh'
  });
});*/



connectTomongoDB("mongodb://localhost:27017/short-url")
.then(()=> console.log("connected succesfully"));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/url",urlRoute);  
app.use("/",staticrout);
app.get('/url/:shortid ',async (req,res)=>{
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

app.listen(PORT,() => console.log(`Server Started at port: ${PORT}`))     