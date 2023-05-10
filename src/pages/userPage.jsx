import { Button } from '@mui/material';
import { useRouter } from "next/router";

export default function userPage() {

  const history = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); //Remove the token from local storage
    history.push('/'); // Redirect to the start page
  };

  return (
    <div>
      <h1>UserPage</h1>
     {/*<Button onClick={handleLogout}>Logout</Button>*/} 
    </div>
  )
}
