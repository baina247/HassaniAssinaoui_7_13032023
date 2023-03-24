import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StyledGlobalStyle from './utils/style/globalStyle'
import Header from './components/header/index'
import Home from './pages/home/index'
import About from './pages/about/index'
import Gallery from './components/gallery/index'
import Error from './pages/404/index'
import Footer from './components/footer/index'

// Nouvelle syntax React 18
const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  //Nouvelle syntax react-router-dom v6.9.0
  <React.StrictMode>
    <Router>
      <StyledGlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/:idLogement" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
