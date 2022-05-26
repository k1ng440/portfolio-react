import React from 'react'
import WORK_EXPERIENCE from '../../data/workExperience'

const ExperienceItem = ({ exp }) => {
  return (
    <div className='mb-10'>
      <div className="flex">
        <div className="flex-1">
          <strong>{exp.name}</strong>
          <span className="display-inline pl-2">{exp.location}</span>
          <p className="text-xs">{exp.position}</p>
        </div>
        <div className="flex-2 text-xs">
          {exp.startDate} - {exp.endDate}
        </div>
      </div>
      <div className="pt-2 pl-5 whitespace-pre-wrap">{exp.summary}</div>
    </div>
  )
}

const Experience = () => {
  return (
    <section className="border-t border-dotted mt-10">
      <h2 className="text-center mt-5 text-xl">Experience</h2>
      {WORK_EXPERIENCE.map((exp) => (
        <ExperienceItem key={exp.name} exp={exp} />
      ))}
    </section>
  )
}

export default Experience
