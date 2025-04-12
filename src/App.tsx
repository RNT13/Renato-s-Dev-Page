import React from 'react'
import { Provider } from 'react-redux'
import About from './Components/about_temp/About'
import Education from './Components/education_temp/Education'
import Footer from './Components/footer_temp/Footer'
import Header from './Components/header_temp/Header'
import Hero from './Components/hero_temp/Hero'
import Languages from './Components/languages_temp/Languages'
import Projects from './Components/projects_temp/Projects'
import Skills from './Components/skills_temp/Skills'
import Social from './Components/social_temp/Social'
import Store from './redux/Store'
import EstiloGlobal, { GlobalContainer } from './styles/GlobalStyle'

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <GlobalContainer>
        <About />
        <Social />
        <Skills />
        <Education />
        <Languages />
        <Projects />
      </GlobalContainer>
      <Footer />
    </Provider>
  )
}

export default App
