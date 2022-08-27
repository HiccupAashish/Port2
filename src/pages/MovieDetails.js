import React, { useEffect, useState } from 'react'
import "../styles/MovieDetails.scss"
import {useLocation} from 'react-router-dom'
import { MovieState } from './MovieState';
import {motion} from "framer-motion/dist/framer-motion"
import { pageAnimation } from '../animation'


export default function MovieDetails() {
    
    const history=useLocation();
    console.log(history.pathname)
    const url=history.pathname
    const [movies,setMovies]=useState(MovieState)
    const[movie,setMovie]=useState(null)

    useEffect(()=>{
        const currentMovie=movies.filter
              ((stateMovie)=>stateMovie.url ===url)
        setMovie(currentMovie[0])
    },[movies,url])

  return (
     <>
     {movie &&(
    <motion.div 
     variant={pageAnimation}
     initial="hidden"
     animate="show"
     exit="exit"
     className="movie-details">
       <div class="headline">
            <h2> {movie.title}</h2>
            <img src={movie.mainImg} alt="movie"/>
       </div>
       <h3 ><a href={movie.link} target="blank">{movie.link}</a></h3>
       <div className="awards">
        {movie.awards.map((award)=>(
            <div class="award">
                <h3> {award.title}</h3>
                    {/* <div className="line"></div> */}
                        <p> {award.description}</p>
                    
            </div>

        ))}
        <div className='git-link'>
           <h4> Click <a href={movie.codelink} target="blank">here</a> to view the Code. </h4>
        </div>
       </div>
       <div className="picture">
         {movie.secondaryImg&& <img src={movie.secondaryImg} alt="movie"/>}
       </div>
    </motion.div>
    
    )}
    </>
  )
}
