const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
  shortid: { 
    type:String,
    required:true,
    unique:true
  },
  redirectURL:{ 
    type:String,
    required:true
  },
  visiteHistory:[{timestamp : {type: Number}}], 
},
{
  timestamps: true
}
); 
const URL = mongoose.model("url",urlSchema);
module.exports = URL; 