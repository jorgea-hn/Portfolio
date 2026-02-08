import React, { useState } from "react";
import logo from "../assets/personalLogo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="bg-gray-100 w-full h-16 fixed">
                <div className="flex justify-between p-4">
                    <div>
                        <img src={logo} alt="logo" className="w-8 ml-4"/>
                    </div>
                    <div className="hidden md:flex justify-between">
                        <a href="#introduccion" className="mr-4 ml-14 hover:text-gray-500">Inicio</a>
                        <a href="#proyectos" className="mr-4 hover:text-gray-500">Proyectos</a>
                        <a href="#descripcion" className="mr-4 hover:text-gray-500" >Sobre mi</a>
                        <a href="#contacto" className="mr-4 hover:text-gray-500">Contacto</a>
                    </div>
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="block text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    {menuOpen && (
                        <div className="md:hidden absolute top-16 right-0 bg-gray-100 w-full border border-gray-200 shadow-lg">
                            <div className="flex flex-col items-center py-2">
                                <a href="#introduccion" className="my-1 hover:text-gray-500">Inicio</a>
                                <a href="#proyectos" className="my-1 hover:text-gray-500">Proyectos</a>
                                <a href="#descripcion" className="my-1 hover:text-gray-500">Sobre mi</a>
                                <a href="#contacto" className="my-1 hover:text-gray-500">Contacto</a>
                            </div>
                        </div>
                    )}
                    <div className="hidden md:flex">
                        <a href="https://github.com/jorgea-hn"><img src={github} alt="icon-github" className="w-8 ml-4 rounded-full hover:bg-gray-300"/></a>
                        <a href="https://www.linkedin.com/in/jorge-henriquez-novoa/"><img src={linkedin} alt="icon-linkedin" className="w-8 ml-4 mr-8 rounded-full hover:bg-gray-300"/></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
