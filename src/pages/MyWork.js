import React from 'react'
import "../styles/Mywork.scss"
import { Link } from 'react-router-dom'
import musicapp from "../images/music-app.png"
// import store from "../images/strore-central.png"
// import news from "../images/news-app.png"
// import quiz from "../images/quiz-app.png"
// import athlete from "../images/athlete-small.png";
import newsapp from "../images/news-app.png"
import quizapp from "../images/quiz-app.png"
import theracer from "../images/theracer-small.png";
import goodtimes from "../images/goodtimes-small.png";
// import {motion} from "framer-motion/dist/framer-motion"
import {motion} from "framer-motion/dist/framer-motion"
import { sliderContainer, pageAnimation,fade,photoAnimation, lineAnimation,slider } from '../animation'
import { useScroll } from '../components/usescroll';
import { ScrollTop } from '../components/Scrolltop';
 
export default function MyWork() {
    const [element,controls]=useScroll()
    const[element2,controls2]=useScroll()
    const[element3,controls3]=useScroll()
  return (

   
    <motion.div 
     variants={pageAnimation}
     initial="hidden"
     animate="show"
     exit="exit"
     className='my_work'>

    <motion.div variants={sliderContainer}>
    <motion.div variants={slider} className="frame1">  </motion.div> 
    <motion.div variants={slider} className="frame2">  </motion.div>
    <motion.div variants={slider} className="frame3">  </motion.div>
    <motion.div variants={slider} className="frame4">  </motion.div> 
    </motion.div>
        <h1 style={{color:"red"}}> My Work</h1>
        
        <motion.div ref={element} variants={fade} animate={controls} initial="hidden" className="movie">
            <motion.h2 variants={fade} > Music App</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to="/project/music-app">
                <div  className='hidden'>
                <motion.img variants={photoAnimation} src={musicapp} alt="Aashish Times"/>
                </div>
            </Link>
        </motion.div>

            <motion.div ref={element2} variants={fade} animate={controls2} initial="hidden" className="movie">
                <h2>React  Quiz Application</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/project/react-quiz">
                    <div className='hidden'>
                    <motion.img variants={photoAnimation} src={quizapp} alt="khoi"/>
                    </div>
                </Link>
            </motion.div>

            <motion.div ref={element3} variants={fade} animate={controls3} initial="hidden" className="movie">
                <h2> News Application </h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/project/news-app">
                    <motion.img variants={photoAnimation} src={newsapp} alt="cddsc"/>
                </Link>
            </motion.div>
    </motion.div>
    
  )
}
