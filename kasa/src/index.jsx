import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StyledGlobalStyle from './utils/style/globalStyle'
import Header from './components/header/index'
import Home from './pages/home/index'
import About from './pages/about/index'
import Gallery from './components/gallery/index'
import Error from './pages/404/index'
import Footer from './components/footer/index'

//Nouvelle syntax React 18
const root = document.getElementById('root')
//Nouvelle syntax React 18
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <StyledGlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/gallery/:idLogement">
          <Gallery />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
)
