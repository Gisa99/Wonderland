import React, { useState } from 'react';
import LogoMobile from '../../../public/images/logo-dashboard.png'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import profile1 from '../../../public/images/profile1.jpg'
import profile2 from '../../../public/images/profile2.jpg'
import profile3 from '../../../public/images/profile3.jpg'
import profile4 from '../../../public/images/profile4.jpg'
import ChatDesktop from '../Chat/ChatDesktop';


const Header = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [mostrarDivMenu, setMostrarDivMenu] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setMostrarDivMenu(!mostrarDivMenu);
    };

    const handleReload = () => {
        window.location.reload();
    }


    return (
        <div className="flex items-center justify-around lg:justify-between pt-2 pb-2  bg-white fixed w-full z-10 shadow-lg lg:pr-10 lg:pl-10">
            <section className='lg:w-2/6 lg:flex lg:items-center lg:gap-4' >
                <img src={LogoMobile} className='w-9 h-9 lg:w-12 lg:h-12 ' alt="logo wonderland"/>
                <div className='hidden  lg:flex lg:items-center'>
                    <input className='hidden lg:block w-64  border-solid border-2 border-gray-200 border-light-blue-500  lg:h-10 rounded-l-lg h-12 pl-2' type="text" placeholder='O que busca?'/>
                    <div className="bg-roxoIntenso rounded-r-lg h-10 flex items-center">
                    <SearchOutlinedIcon sx={{ fontSize: 25, color: '#FFFFFF', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }}/>
                    </div>
                </div>
            </section>
            {/* Aqui serão os buttons de reload, pesquisa, amigos e notificação e abaixo a barra de post */} 
            <section className='flex gap-4 lg:gap-12 items-center'>
                <HomeIcon onClick={handleReload} sx={{ fontSize: 40, color: '#351C59', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }} />
                <PeopleAltIcon sx={{ fontSize: 40, color: '#351C59', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }} />
                <div className='lg:hidden'>
                    <SearchIcon  sx={{ fontSize: 40, color: '#351C59', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }} />
                </div>
                <div className='lg:hidden'>
                    <ChatBubbleOutlinedIcon sx={{ fontSize: 35, color: '#351C59', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }} /> 
                </div>
                <NotificationsIcon sx={{ fontSize: 40, color: '#351C59', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }} />
            </section>
            <section className='hidden lg:flex justify-end lg:w-1/4 '>
                <div  onClick={handleClick}>
                    <ChatBubbleOutlinedIcon
                      sx={{ fontSize: 35, color: isClicked ? '#BF3B91' : '#351C59', // Altera a cor conforme o estado isClicked
                      cursor: 'pointer' }} />
                </div> {mostrarDivMenu &&
                <div className='bg-white h-80 w-64 mr-5 mt-2 absolute top-full right-0  items-center justify-center p-4  rounded shadow-lg overflow-hidden '>
                <h3 className='text-lg font-bold text-center mb-2'>Bate-papo</h3>
                    <ul className='flex flex-col items-center gap-2 text-roxoIntenso w-full h-4/5 overflow-hidden scroll-container max-h-60'>
                        <ChatDesktop profile1={profile1} nome="Fulana de Tal" chat="Bom diaa"/>
                        <ChatDesktop profile1={profile2} nome="Siclano" chat="OK"/>
                        <ChatDesktop profile1={profile3} nome="Beltrana da Silva" chat="Tá em casa?"/>
                        <ChatDesktop profile1={profile4} nome="Fulana de Tal" chat="Apoie a arte"/>
                        <ChatDesktop profile1={profile1} nome="Fulana de Tal" chat="Bom diaa"/>
                        <ChatDesktop profile1={profile2} nome="Siclano" chat="OK"/>
                        <ChatDesktop profile1={profile3} nome="Beltrana da Silva" chat="Tá em casa?"/>
                        <ChatDesktop profile1={profile4} nome="Fulana de Tal" chat="Apoie a arte"/>
                        
                    </ul>
                    
                </div>}
            </section>
            {/* Aqui será o aside de configurações no mobile sem height evidente  */} 
            <section className='lg:hidden'>
                <SettingsIcon sx={{ fontSize: 40, color: '#351C59', "&:hover": {color: '#BF3B91'}, cursor: 'pointer' }} />
            </section>
        </div>
    );
};

export default Header;
