import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc/index.js'
import Mattia from '../assets/mattia.jpg'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
     
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"> 
            I'm a student at the <span className="text-white underline underline-offset-2"><a href = "https://www.univr.it/en/home" target="_blank">University of Verona</a></span> as I'm currently getting a degree in Computer Science.
            I expertise in frameworks like <span className="text-white">React</span> and <span className="text-white">Next.js</span> for the development of <span className="text-white">UX/UI Interfaces</span> for web apps.  
          </motion.p>
        </div>
        
        <img src={Mattia} alt="Mattia Photo" className="w-60 h-60 mt-4 rounded-m object-cover mr-24 scale-105 transition-all duration-300 hover:scale-110" />
      </div>

      <div className="mt-20 flex flex-wrap gap-10 pb-[100px]">
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
