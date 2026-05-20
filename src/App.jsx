import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import Footer from "./Maincomponents/Footer";
import './App.css'
import logo from "./assets/logo.png";

export default function App() {
  return (
    <div>
          <BrowserRouter>
          <div className='menubar'>
          <div className="logo-section">
            <img src={logo} alt="Thaai Madi Logo" className="logo-img" />
            <div className="logo-text">
              <h2>தாய்மடி</h2>
              <p>அறக்கட்டளை</p>
            </div>
          </div>

            <div className='menubar'>
              <Link className="Menu" to={"/Home"}>Home</Link>
              <Link className="Menu" to={"/About"}>About</Link>
              <Link className="Menu" to={"/Services"}>Services</Link>
              <Link className="Menu" to={"/Contact"}>Contact</Link>
              <Link className="Menu" to={"/Gallery"}>Gallery</Link>
            </div>

          </div>
            <Routes>
              <Route path= "/" element = {<Home />} />
              <Route path= "/Home" element = {<Home />} />
              <Route path= "/About" element = {<About />} />
              <Route path= "/Services" element = {<Services />} />
              <Route path= "/Contact" element = {<Contact />} />
              <Route path= "/Gallery" element = {<Gallery  />} />
            </Routes>
            <div className="offer-bar">
              <div className="offer-track">
                🌟 Donations Open for Elderly & Children Support |
                ❤️ Help Us Build a Home for 200 People |
                📚 Education Support for Underprivileged Children |
                🍛 Free Food & Shelter Services Running Daily |
                🙏 Thank You for Supporting ThaaiMadi Aarakattalai...
            </div>
            </div>
            <Footer />
          </BrowserRouter>

    </div>
  )
}
