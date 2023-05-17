import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState();

  // Check if there is a token in local storage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/logoutPage');
  };



  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" color= "success">
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" href="/">
                K.Y.S.T
              </Button>
            </Typography>
            {isLoggedIn ? null:(
              <Button color="inherit" href="/signUpPage">
              Sign up
              </Button>
            )
            }
            {isLoggedIn ? (
              <div><Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
            <Button color="inherit" href="/userPage">
            UserPage
            </Button>
            <Button color="inherit" href="/adminPage">
              AdminPage
            </Button></div>
              
            ) : (
              <Button color="inherit" href="/loginPage">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}




/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} className={styles.navbarBox}>
          <AppBar position="static" >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> <Button color="inherit" href="/"> K.Y.S.T</Button>
             
              </Typography>
              <Button color="inherit" href="/signUpPage">Sign up</Button>
              <Button color="inherit" href="/loginPage">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
  );
}*/
