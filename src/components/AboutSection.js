import React from 'react'
import mypic from "../images/mypic.jpg"

export default function AboutSection() {
  return (
    <div>
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2> Aashish shah</h2>
                </div>
                <div className="hide">
                    <h2> Full stack <span>Web-developer</span> </h2>
                </div>
            </div>
            <p> 
                I am a full-stack developer. I have done mutiple projects with React as Front-end
                and Ruby on rails as Back-end.
            </p>
            <button> Contact Us</button>
            <div className='image'>
                <img src={mypic} alt="My picture"/>
            </div>
        </div>
    </div>
  )
}
