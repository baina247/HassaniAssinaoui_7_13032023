import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StyledGlobalStyle from './utils/style/globalStyle'
import Header from './components/header/index'
import Home from './pages/home/index'
import About from './pages/about/index'
import Gallery from './components/gallery/index'
import Error from './pages/404/index'
import Footer from './components/footer/index'

// Nouvelle syntaxe React 18 import ReactDOm via react-dom/client
const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  // Nouvelle syntaxe "Routes" à la place de "Switch" sur react-router-dom v6.9.0
  <React.StrictMode>
    {/*Ajout de basename pour les routes sur Github Pages */}
    <Router basename="/HassaniAssinaoui_7_13032023">
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
