import React from "react"
import WorkExperience from "../../Models/WorkExperience"

const ExperienceItem = ({ exp }) => {
    return (
        <>
            <div className="flex">
                <div className="flex-1">
                    <strong>{exp.name}</strong>
                    <span className="display-inline pl-2">{exp.location}</span>
                    <p className="text-xs">{exp.position}</p>

                </div>
                <div className="flex-2">
                    {exp.startDate} - {exp.endDate}                    
                </div>
            </div>
            <div className="pt-5">
                adasdasdasd
            </div>
        </>
    )
}

const Experience = () => {
    return (
        <div className="border-t border-dotted mt-10">
            <h2 className="text-center mt-5 text-xl">Experience</h2>

            {WorkExperience.map((exp) => <ExperienceItem key={exp.name} exp={exp} /> )}

        </div>
    )
}


export default Experience