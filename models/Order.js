const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
  userId:{type:String, required:true},
  username:{type:String, required:true},
  products:[{
    productId:{type:String},
    quantity:{type:Number, default:1}
  }],
  amount:{type:Number, required:true},
  address:{type:Object,default:"Egypt"},
  status:{type:String, default:"pending"}
},{timestamps:true})

module.exports = mongoose.model("order", orderSchema)