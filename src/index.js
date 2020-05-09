import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore, StoreProvider } from 'easy-peasy';
import storeModel from '/models'
import './styles/normalize.scss'
import Header from './layouts/header'
import Footer from './layouts/footer'
import Home from './pages/home'
import Components from './pages/components'
import Requests from './pages/requests'

const store = createStore(storeModel)

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/components" component={Components} />
				<Route path="/requests" component={Requests} />
			</Switch>
			<Footer />
		</Router>
	)
}

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root')
)