import React from "react";
import TopSkills from "../../Models/Skills";


const SkillListItem = ({ skill }) => {
    return (
        <li key={skill.category}>
            <b>{skill.category}:</b> {skill.values.join(", ")}
        </li>
    )
}

const Skills = () => {
    return (
        <>
            <div className="border-t border-dotted mt-10">
                <h2 className="text-center mt-5 text-xl">Skills</h2>
                <ul>
                    {TopSkills.map(skill => <SkillListItem key={skill.category} skill={skill} /> )}
                </ul>
            </div>
        </>
    )
}

export default Skills;