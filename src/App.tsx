import React from 'react'
import { Provider } from 'react-redux'
import About from './components/About/About'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Languages from './components/Languages/Languages'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Social from './components/Social/Social'
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
