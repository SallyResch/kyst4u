import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

export default function AdminPage({user}) {
  const [users, setUsers] = useState([]);
  const [emailInput, setEmailInput] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/auth/getUsersCredentials")
      .then(res => res.json())
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleDeleteUser = () => {
    const userToDelete = users.find(user => user.email === emailInput);
    if (userToDelete) {
      fetch('http://localhost:8080/api/v1/auth/deleteUser/' + emailInput, {
        method: 'DELETE',
        mode: 'no-cors'
      })
        .then(res => res.json())
        .then((result) => {
          setUsers(users.filter(user => user.id !== userToDelete.id));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('User not found');
    }
  };

  return (
    <Container>
      <h1>Check out all created users</h1>
      {users.map(user => (
        <Paper elevation={6} key={user.id}>
          <li>Email: {user.email}</li>
          <li>Firstname: {user.firstname}</li>
          <li>Lastname: {user.lastname}</li>
          <li>Role: {user.role}</li>
        </Paper>
      ))}
      <input type="text" value={emailInput} onChange={handleEmailChange} placeholder="Enter user's email" />
      <button onClick={handleDeleteUser}>Delete</button>
    </Container>
  );
}

