import React from 'react';
import Header from "../../Componentes/Header";
import CriarPost from "../../Componentes/CriarPost";
import Post from "../../Componentes/Post";
import post1 from "../../../public/images/post1.jpeg";
import post2 from "../../../public/images/post2.jpeg";
import post3 from "../../../public/images/post3.jpeg";
import post4 from "../../../public/images/post4.jpg";
import Sidebar from '../../Componentes/Sidebar';
import Aside from '../../Componentes/Aside-R';

const Inicio = () => {
    // Array de posts
    const posts = [
        { nome: "Fulano de Tal", post: post1, textoAlt: "Homem tocando violão" },
        { nome: "Beltrana da Silva", post: post2, textoAlt: "Mulher pintando quadro" },
        { nome: "Ciclana dos Santos", post: post3, textoAlt: "Maquiadora" },
        { nome: "Maria Fotografa", post: post4, textoAlt: "Máquina Fotográfica" }
    ];

    return (
        <div className="h-screen bg-white">
            <Header />
            <div className="flex justify-center lg:bg-gray-100">
                <div className="hidden lg:block lg:w-1/4 bg-gray-100 h-screen fixed left-0 shadow-xl"> <Sidebar /></div>
                <div className="lg:w-2/5 lg:p-4 lg:flex lg:flex-col lg:justify-center">
                    <div className="flex items-center justify-center lg:pb-4"> {/* Utilizei flex para centralizar vertical e horizontalmente */}
                        <CriarPost />
                    </div>
                    <div className=" mb-2 ">
                        {/* Mapeando o array de posts para renderizar os componentes Post */}
                        {posts.map((post, index) => (
                              <div className='lg:shadow-xl'>
                                <Post key={index} nome={post.nome} post={post.post} textoAlt={post.textoAlt} />
                              </div>
                            
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/4 bg-gray-100 h-screen fixed right-0 shadow-xl"><Aside/> </div>
            </div>
        </div>
    );
};

export default Inicio;
