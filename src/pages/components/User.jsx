import React, {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button,Paper } from '@mui/material';

export default function User() {

const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [users,setUsers]=useState([]);

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
}

{/* To get all Users in a list from backend*/}
  useEffect (()=>{
    fetch("http://localhost:8080/user/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setUsers(result);
    })
    .catch((error) =>{
      console.log(error);
    });
  },[]);


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

      <h1>Check out all created users</h1>
      <Paper elevation={3}>

        {users.map(user=>(
          <Paper elevation={6} key={user.id}>
            Id:{user.id}
            Email:{user.email}
            Username: {user.username}
            </Paper>
        ))}
      </Paper>
      </Container>
  );
}
