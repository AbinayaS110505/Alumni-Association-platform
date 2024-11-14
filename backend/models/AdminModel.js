const mongoose=require('mongoose')

const AdminSchema=new mongoose.Schema({
    name:String,
    Password:String
})

const AdminModel=mongoose.model('admin',AdminSchema);
module.exports=AdminModel;