import React, {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button,Paper } from '@mui/material';

export default function User() {

const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

{/* To post a user to backend */}
const handleClick=(e)=>{
  e.preventDefault()
  const user={email,username,password}
  console.log(user)
  fetch("http://localhost:8080/user/save",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(user)
  })
    .then(()=> {
    console.log("New User Created");
    })
      .catch((error) => {
      console.error("Error creating new user:", error);
      });
}     

  return (
      <Container>
        <h1>Create new User</h1>
      <Paper>
      <form>
      <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
     
      <Button variant="contained" color='secondary' onClick={handleClick}>Create User</Button>
      </form>
      </Paper>
      </Container>
  );
}
