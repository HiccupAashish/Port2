import React, { useState } from 'react'
import {motion} from "framer-motion/dist/framer-motion"
export default function Toogle({children,title}) {
    const [toggle,setToggle]=useState(false)
  return (
    <motion.div layout className="question" onClick={()=> setToggle(!toggle)}>
        <motion.h4 layout>{title}</motion.h4>
        { toggle && children}
        <div className="faq-line"></div>
    </motion.div>
  )
}
