import '../../index.css'
import React, { useState } from 'react';
import { TextField, Container, Grid, Typography } from '@material-ui/core';


function CriarCadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNascimento: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados ou validar o formulário
    console.log(formData);
  };
 

  return (
    <Container maxWidth="sm">
      <Typography className='font-nunito text-roxoIntenso' variant="h4" align="center" gutterBottom>
        Faça seu cadastro 
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              autoFocus
              className='textfield'
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              type="email"
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='textfield'
              
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              className='textfield'
              
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className='textfield'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              type="password"
              label="Senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className='textfield'
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              type="password"
              label="Confirmar Senha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              className='textfield'
              
              
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CriarCadastro;
