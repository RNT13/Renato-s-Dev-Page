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
import Store from './redux/store'
import { GlobalContainer, GlobalStyle } from './styles/globalStyle'

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <GlobalStyle />
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
