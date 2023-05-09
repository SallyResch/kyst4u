import React, {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button,Paper } from '@mui/material';

export default function SignUp() {

const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

{/* To post a user to backend */}
const handleClick = (e) => {
  e.preventDefault();
  const user = { firstname, lastname, email, password };
  console.log(user);
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  fetch('http://localhost:8080/api/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Pass JWT token as Authorization header
    },
    body: JSON.stringify(user),
  })
    .then(() => {
      console.log('New User Created');
      window.history.pushState(null, null, "/loginPage"); // Navigate to login page
    })
    .catch((error) => {
      console.error('Error creating new user:', error);
    });
};    

  return (
      <Container>
        <h1>Create new User</h1>
      <Paper>
      <form>
      
      <TextField id="outlined-basic" label="firstname" variant="outlined" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
      <TextField id="outlined-basic" label="lastname" variant="outlined" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
      <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
     
      <Button variant="contained" color='secondary' onClick={handleClick}>Create User</Button>
      </form>
      </Paper>
      </Container>
  );
}