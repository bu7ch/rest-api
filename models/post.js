const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PostSchema = new Schema({
  image:  {type: String, required: true},
  description: {type: String, required: true},
  //user: 
  createAt: {type: Date, default: Date.now()},

});

module.exports = mogoose.model('post', PostSchema);