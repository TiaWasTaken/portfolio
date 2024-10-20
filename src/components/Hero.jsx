import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import githubLogo from '../assets/github.png'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Mattia</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[16px]`}>
            I'm a <span className="text-[#915eff]">19 years old</span> web developer, <br className="sm:block hidden" /> based in <span className="text-[#915eff]">Italy</span>.
          </p>
           <p className="mt-4">
            <a href="https://github.com/TiaWasTaken" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" className="cursor-pointer w-8 h-8 inline-block" />
            </a>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" className="relative">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary hover:border-white flex justify-center items-center cursor-pointer">
            <motion.div 
              animate={{ y: [-10, 15, -10] }} 
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} 
              className="w-3 h-3 rounded-full bg-secondary hover:border-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
