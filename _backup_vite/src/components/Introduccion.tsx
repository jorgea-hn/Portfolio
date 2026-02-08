import foto from "../assets/foto.png"

const Introduccion: React.FC = () => {

    function handleSendEmail() {
        const email = "jorgeahenriqueznovoa@gmail.com";
        const subject = "Consulta desde tu sitio web";
        const body = "Hola Jorge,\n\nMe gustaría ponerme en contacto contigo para discutir ...\n\nSaludos,\n[Tu Nombre]";

        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank');
    }

    return (
        <div id="introduccion" className="bg-gray-200 min-h-screen flex justify-center items-center px-10">
            <div className="flex flex-col items-center w-full max-w-4xl">
                <div className="md:pt-5">
                    <img src={foto} alt="foto_perfil" className="w-20 md:w-36 lg:w-40" />
                </div>
                <div className="mt-2 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">Hola, Soy Jorge Henriquez</h1>
                    <p>Desarrollador FullStack / Analista de datos</p>
                </div>
                <div className="mt-6 px-4 md:px-12 lg:px-24">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-center">Mi misión es crear soluciones digitales innovadoras que transformen los negocios de mis clientes</h2>
                    <p className="text-sm md:text-base lg:text-lg text-center">Ingeniero Electronico con 1 año de experiencia en desarrollo de software y 1 año de experiencia en analisis de datos</p>
                </div>
                <div className="mt-10">
                    <button className="bg-slate-950 hover:bg-gray-500 text-white font-bold py-2 px-8 rounded-lg" onClick={handleSendEmail}>
                        Contacto
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Introduccion;
