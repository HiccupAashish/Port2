import React from 'react'
import "../styles/Nav.scss"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion/dist/framer-motion"
import { useLocation } from 'react-router-dom'

export default function Nav() {
  const {pathname}=useLocation()
  return (
    
    <nav className="nav-bar">
        <h1> <a id="logo" href="#">Capture</a></h1>
         <ul>
            <li> 
                <Link to="/"> About Me</Link>
                <motion.div 
                transition={{duration:0.75}} 
                initial={{width:'0%'}} 
                animate={{width: pathname === '/'? '50%':'0%'}} 
                className="line-active"></motion.div>
            </li>
            
            <li> 
            <motion.div 
                transition={{duration:0.75}} 
                initial={{width:'0%'}} 
                animate={{width: pathname === '/work'? '50%':'0%'}} 
                className="line-active"></motion.div>
                <Link to="/work"> My Work</Link>
            </li>
            
            <li> 
            <motion.div 
                transition={{duration:0.75}} 
                initial={{width:'0%'}} 
                animate={{width: pathname === '/contactme'? '50%':'0%'}} 
                className="line-active"></motion.div>
                <Link to="/contactme"> Contact Me</Link>
            </li>
         </ul>
    </nav>
   
  )
}
