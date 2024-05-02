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
            <div className="flex flex-wrap justify-between">
                {skill.images.map((image, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <div className="flex flex-col items-center">
                            <img src={image} alt={`Skill Image ${index}`} className="w-10 h-10 mr-2 my-2" />
                            <h3 className="text-white">{skill.titles[index]}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardSkill