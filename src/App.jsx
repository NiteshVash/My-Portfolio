
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Intro from './Component/Intro/Intro'
import Projects from './Component/Projects/Projects'
import Languages from './Component/Languages/Languages'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/footer'

function App() {

  return (
    <>
      <Navbar />
      <Intro/>
      <Projects/>
      <Languages/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App