import mongoose from "mongoose";
const Schema=mongoose.Schema;
const userSchema=new Schema({
firstname:{
    type:String,
    required:true
},
secondname:{
    type:String,
    required:true
},

    email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    minlength:5
},
dob:{
    type:String
},
gender:{
    type:String
}
,blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true}]
})
export default mongoose.model("User",userSchema);