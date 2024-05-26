import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#FFFFFF',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}
      >
        <form onSubmit={handleSubmit}
          sx={{
            width: '100%',
            marginTop: 1,
          }}
        >
          <h2 className='lg:hidden font-bold text-xl text-roxoIntenso'>Faça seu login</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#281740',
                },
                '& .MuiInputLabel-outlined.Mui-focused': {
                    color: '#281740', 
                },
            }}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#281740',
                 
                },
                '& .MuiInputLabel-outlined.Mui-focused': {
                    color: '#281740', 
                  },
            }}
            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: '#281740', // Cor de fundo do botão
              '&:hover': {
                bgcolor: '#BF3B91', // Cor de fundo do botão ao passar o mouse
              },
            }}
          >
            Sign In
          </Button>

        <Link to="/redefinir" className='hover:text-roxo'>Esqueceu sua senha?</Link>
        

        </form>
      </Box>
    </Container>
  );
};

export default Formulario;
