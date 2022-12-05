import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import AddBlog from './components/AddBlog';
import { useSelector } from "react-redux";
const App = () => {
  const isLoggedin = useSelector((state) => state.isLoggedin)
  console.log(isLoggedin)
  return (
    <React.Fragment >
      <header><Header /></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/add" element={<AddBlog />} />
        </Routes>
      </main>
    </React.Fragment>
  )
}
export default App
