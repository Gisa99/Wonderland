import Comunidades from "../Comunidades"
import memes from "../../../public/images/funny-1.webp"
import pets from "../../../public/images/pets.png"
import animes from "../../../public/images/animes.webp"

const Aside = () =>{
    return (
        <div className="mt-20 bg-gray-100 flex flex-col  gap-14 items-center justify-between">
            
            <div className="flex flex-col gap-2" >
            <h4 className="font-bold mb-2 text-center">Comunidades</h4>
                <Comunidades titulo="Memes Contemporâneos" imagem={memes}/>
                <Comunidades titulo="Amamamos Pets" imagem={pets}/>
                <Comunidades titulo="Animes & Cia" imagem={animes} />
            </div>
            <div className="w-full h-28 ">
                <div className="p-4 text-center text-gray-600 flex flex-col items-center justify-center gap-4">
                    <h4 className="">Wonderland ®</h4>
                    <p>Assis-SP, Brasil</p>
                </div>
            </div>
        </div>
    )
}

export default Aside 