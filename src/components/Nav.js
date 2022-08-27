import React from 'react'
import homelogo from "../images/homelogo.png"
import "../styles/Nav.scss"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion/dist/framer-motion"
import { useLocation } from 'react-router-dom'

export default function Nav() {
  const {pathname}=useLocation()
  return (
    
    <nav className="nav-bar">
        <h1> <Link to="/Port2"><img src={homelogo}/></Link></h1>
         <ul>
            <li> 
                <Link to="/Port2"> About Me</Link>
                <motion.div 
                transition={{duration:0.75}} 
                initial={{width:'0%'}} 
                animate={{width: pathname === '/Port2'? '50%':'0%'}} 
                className="line-active"></motion.div>
            </li>
            
            <li> 
            <motion.div 
                transition={{duration:0.75}} 
                initial={{width:'0%'}} 
                animate={{width: pathname === '/Port2/work'? '50%':'0%'}} 
                className="line-active"></motion.div>
                <Link to="/Port2/work"> My Work</Link>
            </li>
            
            <li> 
            <motion.div 
                transition={{duration:0.75}} 
                initial={{width:'0%'}} 
                animate={{width: pathname === '/Port2/contactme'? '50%':'0%'}} 
                className="line-active"></motion.div>
                <Link to="/Port2/contactme"> Contact Me</Link>
            </li>
         </ul>
    </nav>
   
  )
}
