import github from "../assets/github-white.png";
import enlace from "../assets/enlace.png";

interface Project {
    title: string;
    description: string;
    technology: string[];
    repository: string;
    url: string;
}

interface CardProps {
    project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
    return (
        <div className="bg-slate-950 w-full md:w-4/5 p-5 rounded-md my-2">
            <div className="flex justify-between">
                <h3 className="text-white mb-2">{project.title}</h3>
                <div className="flex">
                    <a href={project.repository}><img className="w-5 h-5 mr-2" src={github} alt="icon-github"/></a>
                    <a href={project.url}><img className="w-5 h-5" src={enlace} alt="icon-url"/></a>
                </div>
            </div>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <ul className="flex flex-wrap text-slate-300">
                {project.technology.map((tech, index) =>
                    <li className="bg-neutral-600 mr-2 mb-2 rounded-md px-2" key={index}>{tech}</li>
                )}
            </ul>
        </div>
    )
}

export default Card;
