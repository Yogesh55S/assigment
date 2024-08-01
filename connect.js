const mongoose = require('mongoose');
mongoose.set("strictQuery",true);
async function connectTomongoDB(url){
  return mongoose.connect(url);
}
module.exports = {
  connectTomongoDB,
}