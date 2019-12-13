const mongoose = require('mongoose')
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true, //data annotation for non duplicate usernames
        minlength:6, //character min
        maxlength:12
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema)