import { NavBar, Hero, Contact, About, Login } from '../components';

const Home = () => {
  return (
    <>
      <div className="z-0 bg-primary">
        <div className="bg-hero-pattern bg-right bg-no-repeat">
          <NavBar />
          <Hero />
        </div>
        <About />
        <Login />
        <Contact />
      </div>
    </>
  )
}

export default Home
