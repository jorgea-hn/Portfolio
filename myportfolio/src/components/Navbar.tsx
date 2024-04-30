import logo from "../assets/personalLogo.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Navbar: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100 w-full h-16 fixed">
                <div className="flex justify-between p-4">
                    <div>
                        <img src={logo} alt="logo" className="w-8 ml-4"/>
                    </div>
                    <div className="flex justify-between">
                        <a href="#introduccion" className="mr-4 ml-14 hover:text-gray-500">Inicio</a>
                        <a href="#proyectos" className="mr-4 hover:text-gray-500">Proyectos</a>
                        <a href="#descripcion" className="mr-4 hover:text-gray-500" >Sobre mi</a>
                        <a href="#contacto" className="mr-4 hover:text-gray-500">Contacto</a>
                    </div>
                    <div className="flex">
                        <a href="https://github.com/jorgea-hn"><img src={github} alt="icon-github" className="w-8 ml-4" /></a>
                        <a href="https://www.linkedin.com/in/jorge-henriquez-novoa/"><img src={linkedin} alt="icon-linkedin" className="w-8 ml-4 mr-8"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar