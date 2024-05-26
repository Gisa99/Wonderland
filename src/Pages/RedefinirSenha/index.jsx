import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const RedefinirSenha = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
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
          <h4 className='font-bold'>Digite um e-mail para receber o código de verificação</h4>
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
          
          <Link to="/enviado">
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
              ENVIAR
            </Button>
          </Link>

        <Link to="/login" className='hover:text-roxo'>Já possui cadastro?</Link>
        

        </form>
      </Box>
    </Container>
  );
};

export default RedefinirSenha;
