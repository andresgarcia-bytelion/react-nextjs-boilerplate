import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './layouts/header'
import Footer from './layouts/footer'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)