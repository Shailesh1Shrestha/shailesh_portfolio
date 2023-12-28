import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Photography from './components/photography/Photography'
import Photog from './components/photography/Photog'
import Portfolio from './components/portfolio/Portfolio'

function App() {


  return (  
   <>
    <Navbar />
    <Home />
    <Skills />
    <Portfolio />
    <About />
    {/* <Photography /> */}
    <Photog  />
    <Contact />
    <Footer />
   </>
  )
}

export default App
