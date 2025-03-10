const shortid = require('shortid');
 const URL = require('../models/url');
 
async function handleshorternURL(req,res){
  const body = req.body;
  if(!body.url)return res.status(400).json({error: "url is required"})
const shortID = shortid();
await URL.create({
  shortid: shortID,
  redirectURL : body.url,
  visiteHistory : [],
});
return res.json({id : shortID})
}
module.exports = {
  handleshorternURL,
}
