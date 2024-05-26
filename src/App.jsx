import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import PageCadastro from "./Pages/CriarCadastro"
import PaginaPadrao from "./Pages/PaginaPadrao"
import RedefinirSenha from "./Pages/RedefinirSenha"
import Enviado from "./Pages/Enviado"
import Inicio from "./Pages/Dashboard"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<PaginaPadrao />}>
        
            <Route path="/cadastro" element={<PageCadastro/>} />
            <Route path="/redefinir" element={<RedefinirSenha />}/>
            <Route path="/enviado" element={<Enviado/>}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/inicio" element={<Inicio />}/>
      
      </Routes>
      
    
    </BrowserRouter>
  )
}

export default App
