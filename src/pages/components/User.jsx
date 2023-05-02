import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

export default function User() {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleClick=(e)=>{
  e.preventDefault()
  const user={email,username,password}
  console.log(user)
  fetch("http://localhost:8080/user/save",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(user)
  })
  .then((response)=> {
    if(!response.ok){throw new Error ('Network response was not ok');
  }
    console.log("New User Created");
  })
  .catch((error)=>{
    console.error('There was a problem with the fetch operation', error);
  });
}
  return (
      <Container>
        <h1>Create new User</h1>
      <form>
      <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </form>
  
      <Button variant="contained" color='secondary' onClick={handleClick}>Create User</Button>
      {email}
      {username}
      {password}
      </Container>
  );
}
