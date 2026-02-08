import correo from "../assets/gmail.png"
import linkedin from "../assets/linkedin-color.png"

const Footer: React.FC = () => {
    return (
        <div id="contacto" className="bg-slate-950 h-40">
            <h3 className="text-lg md:text-xl lg:text-2xl text-center text-white pt-4">Contacto</h3>
            <div className="flex justify-center my-4">
                <a href="mailto:jorgeahenriqueznovoa@gmail.com"><img className="w-12 h-12 mx-4" src={correo} alt="icon-correo" /></a>
                <a href="https://www.linkedin.com/in/jorge-henriquez-novoa/"><img className="w-12 h-12 mx-4" src={linkedin} alt="icon-linkedin" /></a>
            </div>
            <div className="flex justify-end mx-4 text-white">
                <p>2024 - Hecho por @jorgea.hn</p>
            </div>
        </div>
    )
}

export default Footer