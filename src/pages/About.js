import React from 'react'
import AboutSection  from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
import {motion} from "framer-motion/dist/framer-motion"
import { pageAnimation } from '../animation'
export default function About() {
  return (
    <motion.div 
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show">

        <AboutSection/>
        <ServicesSection/>
        <FaqSection/>

    </motion.div>
  )
}
