import React from 'react'
import "../styles/AboutSection.scss"
import mypic from "../images/mypic.jpg"
import {motion} from "framer-motion/dist/framer-motion"
import { tilteAnimation,pageAnimation,fade,photoAnimation } from '../animation'
import Wave from './Wave'

export default function AboutSection() {
   
   
  return (
    <div className="about">
       
        <div className="description">
            
            <motion.div
             variants={pageAnimation} 
             initial="hidden" 
             animate="show"
             className="title">

                <div className="hide">
                    <motion.h2 variants={tilteAnimation} > 
                        Aashish shah
                    </motion.h2>
                </div>

                <div className="hide">
                    <motion.h2 variants={tilteAnimation}> Full stack <span>Web-developer</span> </motion.h2>
                </div>

            </motion.div>
            <motion.p variants={fade}> 
                I am a full-stack developer. I have done mutiple projects with React as Front-end
                and Ruby on rails as Back-end.
            </motion.p>
            <motion.button variants={fade}> Contact Us</motion.button>
            </div>
            {/* <div className='image'> */}
                <motion.img variants={photoAnimation} src={mypic} alt="My"/>
            {/* </div> */}
            <Wave />
            
        </div>
        
  )
}

