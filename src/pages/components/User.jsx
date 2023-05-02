import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

export default function User() {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  return (
      <Container>
        <h1>Create new User</h1>
      <form>
      <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </form>
      {email}
      {username}
      {password}

      <Button variant="contained" color='secondary'>Create User</Button>
      </Container>
  );
}
