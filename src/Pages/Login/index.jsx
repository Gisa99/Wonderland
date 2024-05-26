import { Link } from 'react-router-dom'
import artist from '../../../public/images/artist.png'
import logo from '../../../public/images/logo.png'
import '../../../src/index.css'
import Button from '../../Componentes/Button'
import Formulario from '../../Componentes/Formulário'
 
const Login = () => {
    return(
    <div className='h-screen flex flex-col justify-center items-center bg-gradient2'>
        <img src={logo} className='h-custom lg:hidden' alt="logotipo da Wonderland" />
        
            <div className='m-auto bg-fundo bg-opacity-40 lg:h-4/5 w-4/5 justify-between rounded-xl shadow-lg shadow-gray-600/50 hidden lg:flex'>
                <section className='hidden p-4 rounded-xl lg:block'>
                    <img src={logo} className='h-custom ' alt="logotipo da Wonderland" />
                    <div className='lg:flex flex-col justify-center items-center h-4/5 ml-24 '>
                        <img className='h-4/5 m-auto mt-[-40px] mb-5' src={artist} alt="desenho artístico" />
                        <h1 className='ml-2 mt-10 text-roxoEscuro text-3xl font-nunito italico'>Liberte o <strong>artista</strong> que habita em você!</h1>
                    </div>
                </section>
                <section className='font-nunito ml-[-40px] bg-roxoEscuro lg:w-3/6 rounded-xl shadow-lg shadow-gray-500/50 items-center justify-center flex-col gap-2 hidden lg:flex' >
                    <h2 className='text-white text-2xl mb-3'>Faça seu login</h2>
                    <Formulario />
                    <div className='mt-3 bg-white w-custom rounded-xl'><Link to='/cadastro'><Button  texto="CRIAR CONTA" /></Link></div>
                </section>
            </div>
            <section className='font-nunito  rounded-xl items-center justify-center flex-col gap-2 lg:hidden pt-4 pb-4' >
                    <div className='flex flex-col items-center'>
                        <Formulario />
                        <div className='mt-3 bg-white rounded-xl w-11/12'><Link to='/cadastro'><Button  texto="CRIAR CONTA" /></Link></div>
                    </div>
                    
                </section>
    </div>
    
    )
}

export default Login