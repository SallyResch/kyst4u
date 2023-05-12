import React, {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import styles from './CheckUsers.module.scss';

export default function CheckUsers() {
  const[users,setUsers]= useState([]);

{/* To get all Users in a list from backend*/}
useEffect (()=>{
  fetch("http://localhost:8080/api/v1/auth/getUsersCredentials")
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
      <Paper elevation={3} className={styles.paper}>

        {users.map(user=>(
          <Paper elevation={6} key={user.id} >
            <p>Email:{user.email}</p> 
            <p>Firstname: {user.firstname}</p> 
            <p>Lastname: {user.lastname}</p> 
          </Paper>
        ))}
      </Paper>
    </Container>
  )
}