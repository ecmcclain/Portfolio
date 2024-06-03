import Homepage from '../components/Homepage';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';

const Layout = () => {

    return (
        <div className="layout">
            <main>
                <Homepage />
                <Projects />
                <About />
                <Skills />
                <Resume />
            </main>
          </div>
    )
  }
  
  export default Layout
  