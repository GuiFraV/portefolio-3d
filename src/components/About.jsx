import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>

      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >

        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='{styles.sectionSubText}'>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>
        À propos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >

        Après une reconversion réussie dans le domaine de l'informatique, 
        je suis devenu un développeur web passionné qui n'a jamais cessé 
        de créer et d'innover. Chaque jour, je suis animé par le désir 
        d'approfondir mes compétences et de repousser les limites de 
        ce que je peux réaliser. Actuellement, je suis à la <span className='font-bold text-white'>recherche 
        d'une alternance </span> où je pourrais combiner innovation et efficacité 
        pour continuer à évoluer. Les challenges m'attirent, car ils me poussent 
        à donner le meilleur de moi-même. 
        
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about");