import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react'
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Chilanka'],
      },
    })
  }, [])

  return (
    <>
      <div className="App container px-4 md:px-0 max-w-5xl mx-auto">
        <div className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <Header />
          <About />
          <Skills />
          <Experience />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
