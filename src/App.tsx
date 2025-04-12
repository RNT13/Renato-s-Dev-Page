import React from 'react'
import { Provider } from 'react-redux'
import About from './Components/about/About'
import Education from './Components/education/Education'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Hero from './Components/hero/Hero'
import Languages from './Components/languages/Languages'
import Projects from './Components/projects/Projects'
import Skills from './Components/skills/Skills'
import Social from './Components/social/Social'
import store from './redux/Store'
import EstiloGlobal, { GlobalContainer } from './styles/GlobalStyle'

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
