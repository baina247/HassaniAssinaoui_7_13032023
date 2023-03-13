import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/index'
import Survey from './Pages/Survey/index'
import Results from './Pages/Results/index'
import Freelances from './Pages/Freelances/index'
import Header from './Components/Header/index'
import Error from './Components/Error/index'
import GlobalStyle from './utils/style/globalStyle'
import Footer from './Components/Footer'
import { ThemeProvider, SurveyProvider } from './Utils/Context'
import Profile from './Pages/Profile'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/survey/:questionNumber">
              <Survey />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/freelances">
              <Freelances />
            </Route>
            <Route
              path="/profile/:id"
              render={(props) => <Profile {...props} />}
            />
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
