import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import axios from "axios";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function Auth() {
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [inputs, setinputs] = useState({
    firstname: "",
    secondname: "",
    dob: "",
    gender: "",
    email: "",
    password: ""
  })
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = "login") => {
    const res = await axios.post(`http://localhost:8000/api/user/${type}`, {
      firstname: inputs.firstname,
      secondname: inputs.secondname,
      dob: inputs.dob,
      gender: inputs.gender,
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err.res));
    const data = await res.data;
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if(isSignup){
    sendRequest("signup") .then((data) => localStorage.setItem("userId", data.user._id))
    .then(() => dispath(authActions.login()))
    .then(() => naviagte("/blogs"));
    }
    else{
      sendRequest() .then((data) => localStorage.setItem("userId", data.user._id))
      .then(() => dispath(authActions.login()))
      .then(() => naviagte("/blogs"));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}>
          <Typography variant="h5"> {isSignup ? "Signup" : "Login"}</Typography>
          {isSignup &&
            <><TextField type={"firstname"} name="firstname" value={inputs.firstname} onChange={handleChange} margin="normal" label='firstname' />
              <TextField type={"secondname"} name="secondname" value={inputs.secondname} onChange={handleChange} margin="normal" label='secondname' />
              <TextField type={"date"} margin="normal" name="dob" value={inputs.dob} onChange={handleChange} label='date of birth' sx={{ width: "220px" }} />
              <InputLabel sx={{ display: "flex", marginRight: "auto", marginLeft: "100px" }} >gender</InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                sx={{ width: "220px" }}
                name="gender" onChange={handleChange} value={inputs.gender}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </>}
          <TextField type={"email"} name="email" onChange={handleChange} value={inputs.email} margin="normal" label='email' />
          <TextField type={"password"} name="password" onChange={handleChange} value={inputs.password} margin="normal" label='password' />


          <Button color="warning" type="submit" variant="contained" sx={{ borderRadius: '15px' }}>submit</Button>
          <Button onClick={() => { setIsSignup(!isSignup) }}
          >change to {isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth