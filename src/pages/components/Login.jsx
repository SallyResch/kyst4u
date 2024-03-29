import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Paper } from '@mui/material';
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: "POST",
        headers: { 
        "Content-Type": "application/json",
       },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(user);
      // store the token in local storage or a cookie
      localStorage.setItem('token', data.token);
      // redirect the user to the dashboard or home page
      redirect.push ("/userPage");
      isLoggedIn(true);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  

  return (
    <div>
      <Container className={styles.loginContainer}>
        <h1>Login</h1>
        <Paper className={styles.paper}>
          <form className={styles.form}>
            <TextField
              label="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <TextField
            className={styles.inputfield}
              label="password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button variant="contained" color="success" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

