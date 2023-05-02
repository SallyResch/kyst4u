import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

export default function User() {
  return (
      <Container>
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      </Container>
  );
}
