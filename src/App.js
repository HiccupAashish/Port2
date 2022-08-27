import React from 'react'
import "./styles/Globalstyle.scss"
import MovieDetails from './pages/MovieDetails';
import About  from './pages/About';
import Nav from './components/Nav';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import {Routes, Route,  useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import {ScrollTop} from "./components/Scrolltop"

function App() {

  const location = useLocation()

  return (
    <div className="App">
    
          <Nav/>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/Port2/" element={<About/>}/>   
              <Route path="/Port2/work" element={<MyWork/>}/>          
              <Route path="/Port2/contactme" element={<ContactMe/>}/>
              <Route path="/Port2/project/:id" element={<MovieDetails/>}/>
            </Routes>
          </AnimatePresence>
       <ScrollTop/>
    </div>
  );
}

export default App;
