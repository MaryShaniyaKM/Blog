import express from "express";
import mongoose from "mongoose"
import { blogrouter } from "./routes/blogrouter";
import { router } from "./routes/userrouter";
import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json())
app.use("/api/user",router);
app.use("/api/blog",blogrouter)
mongoose.connect("mongodb+srv://shaniya:21121999@cluster0.v6dbgcc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(8000))
.then(()=>console.log("connected to database,listening to port 8000"))
.catch((err)=>console.log(err))