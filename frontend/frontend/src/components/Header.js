import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Typography, Tabs, Tab } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
const Header = () => {
  const dispath = useDispatch()
  const isLoggedin = useSelector((state) => state.isLoggedin)
  const [value, setvalue] = useState();

  return (
    <AppBar position="sticky" sx={{ backgroundColor:" #FA8BFF",
      backgroundImage: "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)"
      }}>
      <Toolbar>
        <Box >
          {!isLoggedin && <> <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ color: "white", borderRadius: "11px", fontSize: "10px" }}>login</Button>
          </>}
          {isLoggedin && <Button onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{ color: "white", borderRadius: "11px", marginLeft: "15px", fontSize: "10px" }}>log out</Button>
          }
        </Box>
        <Tabs textColor="inherit" sx={{ marginLeft: "100px" }}>
        <Tab LinkComponent={Link} to="/blogs" label="All Blogs"></Tab>
        </Tabs>
        {isLoggedin &&
          <Tabs textColor="inherit" sx={{ marginLeft: "110px" }} value={value} onChange={(e, value) => setvalue(value)}>
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"></Tab>
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog"></Tab>
          </Tabs>
        }
        <Typography variant="h5" display="flex" marginLeft="auto" marginRight="3%">Tasty Delights</Typography>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kx0XkNtnH662uwMYTV0AlHosl8_HaUXybg&usqp=CAU"
          style={{
            width: "45px",
            marginTop: '5px',
            height: '40px',
            borderRadius: '30px'
          }} />
      </Toolbar>
    </AppBar>
  )
}

export default Header