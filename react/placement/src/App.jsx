
import './App.css'
import Home from './component/functionComponents/NavBar/Home.jsx'
import About from './component/functionComponents/NavBar/About.jsx'
import Gallery from './component/functionComponents/NavBar/Gallery.jsx'
import Contact from './component/functionComponents/NavBar/Contact.jsx'
import NavBar from './component/functionComponents/NavBar.jsx'
import Footer from './component/functionComponents/Footer.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    
  )
}

export default App
