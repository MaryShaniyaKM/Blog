import express from "express";
import {getAllBlogs, addBlog, updateBlog, getById, deleteBlog, getByUserId } from "../controllers/blog-controller";
export const blogrouter=express.Router();
blogrouter.get("/",getAllBlogs)
blogrouter.post('/add',addBlog)
blogrouter.put("/update/:id",updateBlog);
blogrouter.get("/:id",getById);
blogrouter.delete("/:id",deleteBlog);
blogrouter.get("/user/:id",getByUserId);
