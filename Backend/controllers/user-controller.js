import User from "../model/User";
import bcrypt from "bcryptjs";
export const getAllUser = async (req, res, next) => {
    let users;
    try {
      users = await User.find();
    } catch (err) {
      console.log(err);
    }
    if (!users) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users });
  };

  export const signup=async(req,res,next)=>{
    const {firstname,secondname,email,password,dob,gender}=req.body;
    let existinguser;
    try{
 existinguser=await User.findOne({email})
    }
    catch(err){
        console.log(err)
    }
    if(existinguser){
        return res.status(400).json({message:"user already exists"})
    }
    const hashedPassword=bcrypt.hashSync(password)
    const user=new User({
        firstname,
        secondname,
        email,
        password:hashedPassword,
        dob,
        gender,
        blogs:[]
    });
   
    try{
   await user.save()
    }
    catch(err){
        console.log(err)
    }
    return res.status(201).json({user})
  }
  export const login=async (req,res,next)=>{
const{email,password}=req.body;
let existinguser;
    try{
 existinguser=await User.findOne({email})
    }
    catch(err){
        console.log(err)
    }
    if(!existinguser){
        return res.status(404).json({message:"couldn't find user"})
    }
    const isPassword=bcrypt.compareSync(password,existinguser.password)
    if(!isPassword){
        return res.status(400).json({message:"incorrect password"})
    }
    return res.status(200).json({message:"successfully loggedin",user:existinguser})
  }