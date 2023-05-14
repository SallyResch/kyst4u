import React, {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button,Paper,MenuItem,Select } from '@mui/material';
import styles from "./SignUp.module.scss";

export default function SignUp() {

const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };


{/* To post a user to backend */}
const handleClick = (e) => {
  e.preventDefault();
  const user = { firstname, lastname, email, password ,role};
  console.log(user);
  
  fetch('http://localhost:8080/api/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      console.log('New User Created');
      console.log('JWT token:', data.token);
      localStorage.setItem('jwtToken', data.token);
    })
    .catch((error) => {
      console.error('Error creating new user:', error);
    });
};    

  return (
      <Container className={styles.signupContainer}>
      <h1 className={styles.header}>Create new User</h1>
      <Paper className={styles.paper}>
      <form className={styles.form} id="outlined-basic">
      <TextField label="firstname" variant="outlined" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
      <TextField label="lastname" variant="outlined" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
      <TextField label="email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField label="password" variant="outlined" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      
      <Select id="outlined-basic" label="role" variant="outlined" value={role} onChange={handleRoleChange}>
            <MenuItem value="USER">User</MenuItem>
            <MenuItem value="ADMIN">Admin</MenuItem>
          </Select>
      <Button variant="contained" color='success' onClick={handleClick}>Create User</Button>
      </form>
      </Paper>
      </Container>
  );
}