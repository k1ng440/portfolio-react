import React from 'react'
import SKILLS from '../../models/skills'

const SkillListItem = ({ skill }) => {
  return (
    <li>
      <b>{skill.category}</b>
      <br />
      {skill.values.join(', ')}
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
