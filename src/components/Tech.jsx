import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 pt-[70px] pb-[80px]">
      {technologies.map((technology) => (
        <div className="w-28 h-28 key={technology.name}">
          <BallCanvas className="cursor-pointer" icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
