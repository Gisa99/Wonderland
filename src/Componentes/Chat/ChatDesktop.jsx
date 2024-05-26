const ChatDesktop = ({profile1, nome, chat}) =>{
    return(
        
        <li className='flex gap-2 rounded p-2 bg-gray-50 w-chat  cursor-pointer shadow hover:bg-gray-200 scroll-content'>
        <img src={profile1} alt="imagem de perfil" className='w-16 rounded-lg max-h-12' />
        <div className='flex flex-col '>
            <h3 className='font-bold overflow-hidden  max-w-28 max-h-6 '>{nome}</h3>
            <p>{chat}</p>
        </div>
        </li>
                

    )
}

export default ChatDesktop