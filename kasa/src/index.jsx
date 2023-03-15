import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/index'
import Navigation from './components/nav/index'
import Home from './pages/home/index'
import About from './pages/about/index'
// import Gallery from './components/gallery/index'
// import Error from './pages/404/index'
// import Footer from './components/footer/index'
ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Header />
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="*">
          <Error />
        </Route> */}
          </Switch>
          {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
