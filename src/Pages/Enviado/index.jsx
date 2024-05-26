import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Enviado = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
        });
      };
    return(
        
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
            <h4 className='font-bold'>Insira o código de verificação enviado para o example@gmail.com</h4>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="codigo"
              label="Código"
              name="codigo"
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
              id="password"
              label="Nova Senha"
              name="password"
              type='password'
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
              id="password"
              label="Confirmar Senha"
              name="password"
              type='password'
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
              SALVAR
            </Button>
  
          <Link to="/login" className='hover:text-roxo'>Já possui cadastro?</Link>
          
  
          </form>
        </Box>
      </Container>
    )
}

export default Enviado 