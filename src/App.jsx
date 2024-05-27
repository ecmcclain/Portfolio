import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import NavBar from '../components/NavBar';
import Homepage from '../components/Homepage';
import About from '../components/About';
import Projects from '../components/Projects';
import {Route, Routes} from "react-router-dom";
import Resume from '../components/Resume';
import {Container} from 'react-bootstrap';
import Skills from '../components/Skills';

function App() {

  return (
    <>
    
      <div className="app-container">
			<header>
				<NavBar />
			</header>
			<main>
        <Homepage />
        <Projects />
        <About />
        
				<Skills />
				<Resume />
			</main>
		</div>
    </>
  )
}

export default App
