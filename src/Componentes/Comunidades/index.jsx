
const Comunidades = ({imagem, titulo}) =>{
    return(
       <div className="flex flex-col p-2 bg-white border rounded-xl gap-2">
            <div className="flex items-center gap-2">
                <img src={imagem} className="w-14 h-14 rounded"/>
                <h3>{titulo}</h3>
            </div>
            <button className="bg-roxoIntenso hover:bg-roxo duration-150 w-2/5 rounded-lg p-1 m-auto text-white">Ver</button>

       </div>

    )
}

export default Comunidades