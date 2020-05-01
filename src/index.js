import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './layouts/header'
import Footer from './layouts/footer'
import Home from './pages/home'
import Components from './pages/components'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducer from './reducers'

const store = createStore(allReducer)

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/components" component={Components} />
        </Switch>
      <Footer />
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)