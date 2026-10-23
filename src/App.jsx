import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Paths } from './components/Paths.jsx'
import { About } from './components/About.jsx'
import { Supports } from './components/Supports.jsx'
import { How } from './components/How.jsx'
import { Funding } from './components/Funding.jsx'
import { Stories } from './components/Stories.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Paths />
        <About />
        <Supports />
        <How />
        <Funding />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
