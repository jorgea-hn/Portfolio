interface Skill {
    images: string[];
    titles: string[];
}

interface SkillProps {
    skill: Skill
}

const CardSkill: React.FC<SkillProps> = ({ skill }) => {

    return (
        <div className="bg-slate-950 p-5 rounded-md my-8 w-full">
            <div className="flex flex-wrap justify-between md:justify-around">
                {skill.images.map((image, index) => (
                    <div key={index} className="flex items-center">
                        <div className="flex flex-col items-center md:mx-2 mx-2">
                            <img src={image} alt={`Skill Image ${index}`} className="w-10 h-10 mr-2 my-2 bg-slate-100 rounded-full" />
                            <h3 className="text-white">{skill.titles[index]}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardSkill