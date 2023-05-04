import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button,Paper } from '@mui/material';



export default function Login() {
  return (
    <div>
      <Container>
        <h1>Login</h1>
      <Paper>
      <form>
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <Button variant="contained" color='secondary'>Login</Button>
      </form>
      </Paper>
      </Container>
    </div>
  )
}
