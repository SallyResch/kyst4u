import { useRouter } from "next/router";
import { Button } from "@mui/material";
import CheckUsers from "./components/AllUser/CheckUsers";
import styles from "../styles/Home.module.scss"
export default function userPage() {

  
  const history = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); //Remove the token from local storage
    history.push('/logoutPage'); // Redirect to the start page
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
    
  return (
    <div>
    <h1>UserPage</h1>

    <div className={styles.logoutContainer}>
    <Button onClick={handleLogout}>Logout</Button>
    </div>
   

    <div className={styles.updateContainer}>
    <Button onClick={handleUpdateUser}>Update User</Button>
    </div>
    

    <div className={styles.deleteContainer}>
      
      <Button onClick={handleDeleteUser}>Delete User</Button>
    </div>

    <CheckUsers/>
    
    </div>
  )
}
