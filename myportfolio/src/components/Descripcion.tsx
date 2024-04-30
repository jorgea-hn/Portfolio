import Footer from "./Footer"
import logo from "../assets/personalLogo.png"

const Descripcion: React.FC = () => {
    return (
        <div id="descripcion" className="bg-gray-300 min-h-screen flex-grow">
            <h3 className="font-bold text-center pt-16">Sobre mi</h3>
            <div className="flex justify-around my-9">
                <div className="w-2/5">
                    <h4 className="my-2">Soy Ingeniero Electronico, me gusta encontrar soluciones</h4>
                    <p className="text-justify">En pandemia me perfile por el area de desarrollo y analisis, actualmente cuento con experiencia tanto en el area de desarrollo backend y frontend como en el area de analisis de datos.
                        Vivo en Colombia, me gusta el arte y el gym, disfruto probar cosas nuevas y diferentes, con el fin de mostrar algo innovador, que solucione un problema de la sociedad.
                        Considero que estoy en el mundo con el fin de dejar una marca, ya sea a nivel profesional o a nivel personal.
                        Me gusta hacer las cosas bien y correctas, soy imparcial y justo.
                        Siempre estoy dispuesto a ayudar y a aprender
                        Si tienes alguna duda no dudes en escribirme al correo o a hablarme por linkedin </p>
                </div>
                <div >
                    <img src={logo} alt="" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Descripcion