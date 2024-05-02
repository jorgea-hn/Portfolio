import Card from "./Card"

interface Project {
    title: string;
    description: string;
    technology: string[];
    repository: string;
}

const Proyectos: React.FC = () => {

    const projectsWeb: Project[] = [
        {
            title: "Adopta un arbol",
            description: "Proyecto web que busca la concientizacion ambiental para una region de Argentina",
            technology: ["React", "Django", "PostgresSQL"],
            repository:"https://github.com/No-Country/s12-20-m-python"
        },
        {
            title: "Clon de Trello",
            description: "Proyecto web que busca la concientizacion ambiental para una region de Argentina",
            technology: ["React", "Django", "PostgresSQL"],
            repository:"https://github.com/No-Country/c13-38-ft-python"
        },
        
        
    ]

    const projectsDatos: Project[] = [
        {
            title: "Reconocimiento de Emociones",
            description: "Proyecto web que busca la concientizacion ambiental para una region de Argentina",
            technology: ["Python", "OpenCV", "PowerBI", "Pandas", "Excel"],
            repository:"https://github.com/No-Country/s14-26-ft-data-bi"
        },
        {
            title: "Anlisis de Constructora",
            description: "Proyecto web que busca la concientizacion ambiental para una region de Argentina",
            technology: ["Python", "SQL", "Streamlit", "Pandas"],
            repository:"https://github.com/No-Country/s13-25-n-data-bi"
        }
    ]

    return (
        <div id="proyectos" className="bg-gray-300 min-h-screen ">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center pt-16">Proyectos</h3>
            <div className="flex flex-col md:flex-row justify-around mt-8">
                <div className="flex flex-col items-center md:w-1/2 md:px-0 px-5">
                    <h3 className="text-lg md:text-lg lg:text-xl text-center pb-5">Proyectos Web</h3>
                    {projectsWeb.map((project) => (
                        <Card key={project.title} project={project} />
                    ))}
                </div>
                <div className="flex flex-col items-center md:w-1/2 md:px-0 px-5">
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