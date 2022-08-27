import React from 'react'
import "../styles/Faq.scss"
import {motion} from "framer-motion/dist/framer-motion"
import Toogle from './Toogle'
import { scrollReveal } from '../animation'
import { useScroll } from './usescroll'
import {AnimateSharedLayout} from "framer-motion/dist/framer-motion"

export default function FaqSection() {
    const [element,controls]=useScroll()
  return (
    <motion.div variants={scrollReveal} ref={element} animate={controls} className='faq'>
        <h2> Any Questions <span>FAQ</span></h2>

        <AnimateSharedLayout>
        <Toogle title={'Whats my qualification ?'}>
               
            <div className="answer">
                <p>Upto High School in Nepal</p>
                <p>Bachelor's in Information Technology (VIT Sydney)</p>
            </div>      
        
        </Toogle>

        <Toogle title={'Why Hire me ?'}>
       
   
            <div className="answer">
                <p>I love solving problems.</p>
                <p>I have a deep desire to be the best in what i do.</p>
            </div>
        
        </Toogle>

        <Toogle title={'My Hoobies'}>
       
            <div className="answer">
                <p>Ice Skating</p>
                <p>Night walk</p>
                <p> Long Drive</p>
            </div>
       
        </Toogle>

        </AnimateSharedLayout>
    </motion.div>
  )
}
