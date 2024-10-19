import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 pt-[70px] pb-[90px]">
      {technologies.map((technology) => (
        <div className="w-28 h-28 key={technology.name}">
          <BallCanvas className="cursor-pointer" icon={technology.icon}/>
          <span className="flex items-center justify-center pt-3 pb-3 select-none">{technology.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
