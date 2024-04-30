import github from "../assets/github-white.png"

interface Project {
    title: string;
    description: string;
    technology: string[];
    repository: string
}

interface CardProps {
    project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
    return (
        <div className="bg-slate-950 w-4/5 p-5 rounded-md my-2">
            <div className="flex justify-between">
            <h3 className="text-white mb-2">{project.title}</h3>
            <a href={project.repository}><img className="w-5 h-5" src={github} alt="icon-github"/></a>
            </div>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <ul className="flex text-slate-300">
                {project.technology.map((tech,index)=>
                    <li className="bg-neutral-600 mr-2 rounded-md px-2" key={index}>{tech}</li>
                )}
            </ul>
        </div>
    )
}

export default Card