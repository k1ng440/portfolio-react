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

      <div className="text-sm font-medium text-gray-500 border-r border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="">
          <li className="mr-2">
            <a
              href="#whatever"
              className="inline-block p-4 border-l-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#whatever"
              className="inline-block p-4 text-blue-600 border-l-2 active dark:text-blue-500"
              aria-current="page"
            >
              Dashboard
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#whatever"
              className="inline-block p-4 border-l-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
