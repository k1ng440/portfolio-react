import React from 'react'
import SKILLS from '../../data/skills'

const SkillListItem = ({ skill }) => {
  return (
    <li className='mb-3'>
      <dd className='font-semibold'>{skill.category}</dd>
      <dt className='text-lime-50'> {skill.values.join(', ')}</dt>
    </li>
  )
}

const Skills = () => {
  return (
    <div className="border-t border-dotted mt-10">
      <h2 className="text-center mt-5 text-xl">Skills</h2>
      <ul>
        {SKILLS.map((skill) => (
          <SkillListItem key={skill.category} skill={skill} />
        ))}
      </ul>
    </div>
  )
}

export default Skills
