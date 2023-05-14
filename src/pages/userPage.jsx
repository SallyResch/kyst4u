import { useRouter } from "next/router";
import { Button } from "@mui/material";
import styles from "../styles/Home.module.scss"
import { useState, useEffect } from 'react';

export default function userPage() {
  
  const [user, setUser] = useState([]);
  
  const history = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login'); // Redirect to the login page if not logged in
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/auth/getUserInfo", {
          headers: {
            method: 'GET',
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [history]);

  const handleUpdateUser = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/v1/auth/update', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // the updated user data
        }),
      });
      const data = await response.json();
      console.log(data); // log the response from the backend
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async ()=> {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/v1/auth/delete', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user })
      });

      const email = await response.json();
      console.log(email); // log the response from the backend
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); //Remove the token from local storage
    history.push('/logoutPage'); // Redirect to the start page
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main className={styles.main}>
      <h1>{user.firstname}'s Profile Page</h1>
      <form action="">
      <p key={user.id}>Email: {user.email}</p>
      <p key={user.id}>Firstname: {user.firstname}</p>
      <p key={user.id}>Lastname: {user.lastname}</p>
      </form>
      <Button onClick={handleLogout}>Logout</Button>
      <Button onClick={handleUpdateUser}>Update User</Button>
      <Button onClick={handleDeleteUser}>Delete User</Button>
      </main>
    </div>
  );
}
