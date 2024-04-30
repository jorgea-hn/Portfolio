import foto from "../assets/foto.png"

const Introduccion : React.FC = () =>{
    return (
        <div id="introduccion" className="bg-gray-200 min-h-screen flex justify-center items-center px-10">
            <div className="flex flex-col items-center">
                <div>
                    <img src={foto} alt="foto_perfil" className="w-40" />
                </div>
                <div className="mt-2">
                    <h1 className="text-2xl font-bold mt-4">Hola, Soy Jorge Henriquez</h1>
                    <p>Desarrollador FullStack / Analista de datos</p>
                </div>
                <div className="mt-6 px-80">
                    <h2 className="text-xl text-center">Mi misión es crear soluciones digitales innovadoras que transformen los negocios de mis clientes</h2>
                    <p className="text-sm text-center">Ingeniero Electronico con 1 año de experiencia en desarrollo de software y 1 año de experiencia en analisis de datos</p>
                </div>
                <div className="mt-10">
                    <button className="bg-slate-950 hover:bg-gray-500 text-white font-bold py-2 px-8 rounded-lg">
                        Contacto
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Introduccion