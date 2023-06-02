const mongoose = require("mongoose");
var moment = require('moment');
const schema = mongoose.Schema;

const feed = new schema({
    name: {
        //first input (first object)
        type: String,
        required: true,
        maxLength: 15,
      },
    
      message: {
        //second input 
        type: String,
        required: true,
        maxLength: 40,
      },
      create_at:{
        type:Date,
        default:Date.now(),
        get: function(createAt){
          return  moment(createAt).format('MMMM Do YYYY, h:mm:ss a')
        }
      }
    }, {timestamps:true});
  

module.exports= mongoose.model ('Feed', feed)