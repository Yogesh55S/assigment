const shortid = require("shortid");
async function handleshorternURL(req,res){
  const body = req.body;
  if(!body.url) return response.status(400).json({error: "url is required"})
const shortID = shortid();
await URL.create({
  shortID: shortID,
  redirectURL : body.url,
  visiteHistory : [],
});
return res.json({id : shortID})
}
module.exports = {
  handleshorternURL
}