import React from 'react'
import "../styles/ServicesSection.scss"
import reactlogo from '../images/react-logo.png'
import react from "../images/react-logo.png"
import redux from "../images/redux-logo.png"
import htmlcss from "../images/html&css-logo.png"
import rubyonrails from "../images/rubyonrails-logo.png"
import iamaprogrammer from "../images/iamaprogrammer.png"
import { useScroll } from './usescroll'
import {motion} from "framer-motion/dist/framer-motion"
import { scrollReveal } from '../animation'

export default function ServicesSection() {
    const [element,controls]=useScroll()
  return (
    <motion.div 
    variants={scrollReveal} 
    animate={controls} 
    initial="hidden" 
    ref={element} className='services'>
        <div className="description">
            <h2> My <span> frameworks</span></h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={htmlcss} alt="html_css" />
                       
                    </div>
                <h3>HTML & CSS</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={react} alt="React" />
                       
                    </div>
                <h3>React</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={redux} alt="Redux" />
                    
                    </div>
                <h3> Redux</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={rubyonrails} alt="Rubyonrails" />
                        {/* <h3> Ruby on Rails</h3> */}
                    </div>
                <h3> Rails </h3>
                </div>
            </div>
        </div> 
        <div className="image">
            <img src={iamaprogrammer} alt="funny_background" />
        </div>    
    </motion.div>
  )
}
