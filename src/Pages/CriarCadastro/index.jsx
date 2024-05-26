import Button from "../../Componentes/Button"
import CriarCadastro from "../../Componentes/FormCadastro"
import Logout from "../../Componentes/Logout"

const PageCadastro = () =>{

    return (
       <div className="flex items-start justify-center ">
        <section className="bg-white lg:mt-[-4rem]  lg:w-2/5 p-4 rounded-lg flex flex-col gap-2">
            <CriarCadastro />
            <div className="m-auto w-11/12"><Button  texto="TUDO PRONTO" /></div>
            <Logout />
        </section>
       </div>

    )
}

export default PageCadastro 