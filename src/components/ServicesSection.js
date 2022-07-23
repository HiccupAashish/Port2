import React from 'react'
import reactlogo from '../images/react-logo.png'
import react from "../images/react-logo.png"
import redux from "../images/redux-logo.png"
import htmlcss from "../images/html&css-logo.png"
import rubyonrails from "../images/rubyonrails-logo.png"
import iamaprogrammer from "../images/iamaprogrammer.png"

export default function ServicesSection() {
  return (
    <div className='services'>
        <div className="description">
            <h2> My <span> frameworks</span></h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={htmlcss} alt="html_css" />
                        <h3> HTML, CSS</h3>
                    </div>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={react} alt="React" />
                        <h3> React</h3>
                    </div>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={redux} alt="Redux" />
                        <h3> Redux</h3>
                    </div>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={rubyonrails} alt="Rubyonrails" />
                        <h3> Ruby on Rails</h3>
                    </div>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div> 
        <div className="image">
            <img src={iamaprogrammer} alt="funny_background" />
        </div>    
    </div>
  )
}
