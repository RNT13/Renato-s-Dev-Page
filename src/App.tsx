import React from 'react'
import { Provider } from 'react-redux'
import About from './components/about/About'
import Education from './components/education/Education'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Languages from './components/languages/Languages'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Social from './components/social/Social'
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
