
import './App.css'
import Home from './component/functionComponents/NavBar/Home.jsx'
import About from './component/functionComponents/NavBar/About.jsx'
import Gallery from './component/functionComponents/NavBar/Gallery.jsx'
import Contact from './component/functionComponents/NavBar/Contact.jsx'
import NavBar from './component/functionComponents/NavBar.jsx'
import Footer from './component/functionComponents/Footer.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UseEffect from './component/functionComponents/UseEffect/UseEffect.jsx'
import UseEffect_text from './component/functionComponents/UseEffect/UseEffect_text.jsx'
import UseRef from './component/functionComponents/UseRef/UseRef.jsx'
import UseContext from './component/functionComponents/UseContext/UseContext.jsx'
import FAQ from './component/functionComponents/Footer/FAQ.jsx'

function App() {
  var log="LOGESH"

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About college={log} />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/useEffect" element={<UseEffect/>} />
          <Route path="/useEffect_1" element={<UseEffect_text />}/>
          <Route path="/UseRef" element={<UseRef/>}/>
          <Route path="/UseCon" element={<UseContext/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>

      <Footer />
      </BrowserRouter>
    </div>
    
  )
}

export default App
