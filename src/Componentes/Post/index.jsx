import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Reacoes from '../Reações';

const Post = ({ nome, post, textoAlt }) => {
    const [mostrarDivMenu, setMostrarDivMenu] = useState(false);

    const toggleDivMenu = () => {
        setMostrarDivMenu(!mostrarDivMenu);
    };

    return (
        <>
            <div className="flex pl-1 pr-1 pb-2 justify-between items-center bg-white rounded-tl rounded-tr">
                <div className='flex items-center mt-2 gap-2'>
                    <div className="bg-roxoIntenso p-2 w-11 rounded-md">
                        <PersonIcon sx={{ fontSize: 28, color: '#FFFFFF', "&:hover": { color: '#BF3B91' }, cursor: 'pointer' }} />
                    </div>
                    <h1 className='font-bold text-lg'>{nome}</h1>
                </div>
                <div className='flex flex-col relative'>
                    <div className="relative">
                        <KeyboardArrowDownIcon sx={{ fontSize: 30, cursor: 'pointer' }} onClick={toggleDivMenu} />
                        {mostrarDivMenu && <div className='bg-gray-100 h-32 w-36 mt-2 absolute top-full right-0  items-center justify-center p-2'>
                            <ul className='flex flex-col items-center gap-2 text-roxoIntenso w-full'>
                                <li className='bg-white hover:bg-roxoIntenso hover:text-white rounded w-full text-center pt-1 pb-1 transition duration-150 ease-in-out'>Não me mostre</li>
                                <li className='bg-white hover:bg-roxoIntenso hover:text-white rounded w-full text-center pt-1 pb-1 transition duration-150 ease-in-out'>Bloquear</li>
                                <li className='bg-white hover:bg-roxoIntenso hover:text-white rounded w-full text-center pt-1 pb-1 transition duration-150 ease-in-out'>Denunciar</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
            <img className='w-full' src={post} alt={textoAlt} />
            
                <Reacoes />
        </>
    );
}

export default Post;
