import React from 'react'
import {AiFillLinkedin,AiFillMobile} from "react-icons/ai"
import {GoMailRead} from "react-icons/go"
import "../styles/Contact.scss"
import {motion} from "framer-motion/dist/framer-motion"
import { pageAnimation,tilteAnimation } from '../animation'

export default function ContactMe() {
  return (
    <motion.div
     variants={pageAnimation}
     initial="hidden"
     animate="show"
     exit="exit"
     className='contact-style'
    
     >
      {/* <div className='contact-style'> */}
        <div className='hide'>
             <motion.h1 variants={tilteAnimation}> Contact Me</motion.h1>
        </div>
        <motion.div className="social" variants={tilteAnimation}>
            <GoMailRead style={{overFlow:"hidden"}} size="3rem" color='orange'/>
              <h2> shahaashish22@gmail.com</h2>
            
        </motion.div>

        <motion.div className="social" variants={tilteAnimation}>
            <AiFillMobile style={{overFlow:"hidden"}} size="3rem" color='black'/>
              <h2> 0435739664</h2>
            
        </motion.div>

        <motion.div className="social" variants={tilteAnimation}>
            <AiFillLinkedin style={{overFlow:"hidden"}} size="3rem" color='blue' />
            
              <h2>https://www.linkedin.com/in/aashish-shah-017531164 </h2>
              
            
        </motion.div>
      {/* </div> */}
      
    </motion.div>
  )
}
