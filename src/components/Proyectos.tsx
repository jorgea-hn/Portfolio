import Card from "./Card"

interface Project {
    title: string;
    description: string;
    technology: string[];
    repository: string;
    url:string;
}

const Proyectos: React.FC = () => {

    const projectsWeb: Project[] = [
        {
            title: "Guardianes del Bosque",
            description: "Desarrollo de un proyecto web para la adopción de árboles en Argentina, incentivando la reforestación. La plataforma permite adoptar árboles, seguir su crecimiento y aprender sobre la importancia de la conservación ambiental.",
            technology: ["React", "Django", "PostgreSQL"],
            repository: "https://github.com/No-Country/s12-20-m-python",
            url:"",
        },
        {
            title: "Página de gestión de proyectos",
            description: "Desarrollo de un proyecto web de gestión de proyectos inspirado en Trello, ofreciendo una plataforma intuitiva para organizar tareas, asignar responsabilidades y hacer un seguimiento del progreso.",
            technology: ["React", "Django", "PostgreSQL"],
            repository: "https://github.com/No-Country/c13-38-ft-python",
            url:"",
        },
        {
            title: "Calculadora",
            description: "Proyecto calculadora de operaciones basicas y que permite realizar el cambio de color de esta para mayor personalización.",
            technology: ["HTML", "CSS", "JavaScript"],
            repository: "https://github.com/No-Country/c13-38-ft-python",
            url:"https://jorgea-hn.github.io/Calculadora_JS.github.io/",
        }
    ]

    const projectsDatos: Project[] = [
        {
            title: "Reconocimiento de Emociones",
            description: "Desarrollo de una app de escritorio que utiliza IA para reconocer emociones. La app genera un conjunto de datos que incluye la emoción predominante, su intensidad y otros indicadores relevantes, permitiendo la investigación de las emociones.",
            technology: ["Python", "OpenCV", "PowerBI", "Pandas", "Excel"],
            repository: "https://github.com/No-Country/s14-26-ft-data-bi",
            url:"",
        },
        {
            title: "Análisis de Constructora",
            description: "Desarrollo de una web app que permite a una empresa con múltiples constructoras analizar su desempeño mediante datos históricos y un modelo predictivo de IA. Esto les permite tomar mejores decisiones, reducir costos y aumentar la satisfacción del cliente.",
            technology: ["Python", "SQL", "Streamlit", "Pandas"],
            repository: "https://github.com/No-Country/s13-25-n-data-bi",
            url:"",
        }
    ]

    return (
        <div id="proyectos" className="bg-gray-300 min-h-screen ">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center pt-16">Proyectos</h3>
            <div className="flex flex-col md:flex-row justify-around mt-8 ">
                <div className="flex flex-col items-center md:w-1/2 md:px-0 px-5 mb-12">
                    <h3 className="text-lg md:text-lg lg:text-xl text-center pb-5">Proyectos Web</h3>
                    {projectsWeb.map((project) => (
                        <Card key={project.title} project={project} />
                    ))}
                </div>
                <div className="flex flex-col items-center md:w-1/2 md:px-0 px-5 mb-12">
                    <h3 className="text-lg md:text-lg lg:text-xl text-center pb-5">Proyectos de Data</h3>
                    {projectsDatos.map((project) => (
                        <Card key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Proyectos