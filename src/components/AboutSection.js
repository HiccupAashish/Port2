import React from "react";
import "../styles/AboutSection.scss";
import resume from "../images/Aashish Resume.pdf";
import mypic from "../images/mypic.jpg";
import { motion } from "framer-motion/dist/framer-motion";
import {
  tilteAnimation,
  pageAnimation,
  fade,
  photoAnimation,
} from "../animation";
import Wave from "./Wave";

export default function AboutSection() {
  return (
    <div className="about">
      <div className="description">
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          className="title"
        >
          <div className="hide">
            <motion.h2 variants={tilteAnimation}>Aashish shah</motion.h2>
          </div>

          <div className="hide">
            <motion.h2 variants={tilteAnimation}>
              {" "}
              Full stack <span>Web-developer</span>{" "}
            </motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          A full-stack developer proficient in React and Rails as Backend. I have done mutiple projects with React.
        </motion.p>
        <a href={resume} target="_blank" rel="noopener noreferrer" download>
          <motion.button style={{fontSize:"1em"}} variants={fade}> Download Resume</motion.button>
        </a>
      </div>
      {/* <div className='image'> */}
      <motion.img variants={photoAnimation} src={mypic} alt="My" />
      {/* </div> */}
      <Wave />
    </div>
  );
}
