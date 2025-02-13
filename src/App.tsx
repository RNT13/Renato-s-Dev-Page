import React from 'react'
import { Provider } from 'react-redux'
import About from './Components/About/about.index'
import Education from './Components/Education/education.index'
import Footer from './Components/Footer/footer.index'
import Header from './Components/Header/header.index'
import Hero from './Components/Hero/hero.index'
import Languages from './Components/Languages/languages.index'
import Projects from './Components/Projects/projects.index'
import Skills from './Components/Skills/skills.index'
import Social from './Components/Social/social.index'
import EstiloGlobal, { GlobalContainer } from './Styles/globalStyle'
import store from './redux/store'

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
