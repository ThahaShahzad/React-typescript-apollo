import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Components/Home Page/HomePage'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import PeoplePage from './Components/People Page/PeoplePage'

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/people' component={PeoplePage} exact />

          {/* <Route component={Error} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
