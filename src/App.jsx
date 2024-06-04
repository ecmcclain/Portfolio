import { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import NavBar from '../components/NavBar';
import {Route, Routes} from "react-router-dom";
import Jimi from '../components/Jimi';
import Layout from '../components/Layout';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1,
    );
    if (window.location.href.lastIndexOf('#') > 0) {
      document.getElementById(href)?.scrollIntoView();
    }
   });

  return (
    <>
    
      <div className="app-container">
			<header>
				<NavBar />
      </header>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/jimi" element={<Jimi />} />
        </Routes>
			
		</div>
    </>
  )
}

export default App
