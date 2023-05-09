import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Paper } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      // store the token in local storage or a cookie
      localStorage.setItem('token', data.token);
      // redirect the user to the dashboard or home page
      window.location.href = "/userPage";
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <Container>
        <h1>Login</h1>
        <Paper>
          <form>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

