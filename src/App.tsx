import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home'
import Footer from './components/Footer/Footer'
import { useRef } from 'react'

export type SectionRefs = {
  techSectionRef: any
  aboutMeSectionRef: any
  projectsSectionRef: any
  contactMeSectionRef: any
}

function App() {
  const refs: SectionRefs = {
    techSectionRef: useRef<HTMLInputElement>(null),
    aboutMeSectionRef: useRef<HTMLInputElement>(null),
    projectsSectionRef: useRef<HTMLInputElement>(null),
    contactMeSectionRef: useRef<HTMLInputElement>(null),
  }
  const scrollToSection = (ref?: any) => {
    if (ref === undefined) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      if (ref === refs.aboutMeSectionRef) {
        window.scrollTo({
          top: ref.current.offsetTop - 75,
          behavior: 'smooth',
        })
      } else {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <>
      <Navbar refs={refs} scrollToSection={scrollToSection} />
      <Routes>
        <Route path='/' children element={<Home refs={refs} scrollToSection={scrollToSection} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
