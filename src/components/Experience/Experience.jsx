import React from "react"
import WORK_EXPERIENCE from "../../models/workExperience"

const ExperienceItem = ({ exp }) => {
    return (
        <section>
            <div className="flex">
            <div className="flex-1">
                <strong>{exp.name}</strong>
                <span className="display-inline pl-2">{exp.location}</span>
                <p className="text-xs">{exp.position}</p>
            </div>
            <div className="flex-2">{exp.startDate} - {exp.endDate}</div>
            </div>
            <div className="pt-5">
                {exp.summary}
            </div>
        </section>
    )
}

const Experience = () => {
    return (
        <div className="border-t border-dotted mt-10">
            <h2 className="text-center mt-5 text-xl">Experience</h2>

            {WORK_EXPERIENCE.map((exp) => <ExperienceItem key={exp.name} exp={exp} />)}

        </div>
    )
}


export default Experience