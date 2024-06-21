import { BrowserRouter } from 'react-router-dom'

import { NavBar, Hero, Contact, About } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
