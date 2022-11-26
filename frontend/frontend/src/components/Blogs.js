import React ,{ useEffect, useState } from 'react'
import axios from "axios";
import Blog from '../components/Blog'
const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest=async()=>{
    const res= await axios.get("http://localhost:8000/api/blog") .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then((data) => setBlogs(data.blogs));
  },[]);
  console.log(blogs);
  return (
    <div>
    {blogs && blogs.map((blog,index)=>(<Blog title={blog.title} description={blog.description} imageURL={blog.image} userName={blog.user.firstname[0]}/>))}
    </div>
  )
}

export default Blogs