import React, {useEffect, useState} from 'react';

import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

export default function CheckUsers() {
  const[users,setUsers]= useState([]);

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
  )
}