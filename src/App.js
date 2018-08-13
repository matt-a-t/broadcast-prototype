import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom' // eslint-disable-line no-unused-vars

import Navmenu from './navMenu' // eslint-disable-line no-unused-vars
import IntroPage from './introPage'
import BroadcastView from './broadcastView'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						{/* <img src={logo} className="App-logo" alt="logo" /> */}
						{/* <h1 className="App-title">Welcome to React</h1> */}
						<img src='https://apps.dev.ciswired.com/tempimages/DEMO_login_logo.jpg' alt="Logo" />
						<Navmenu />
					</header>
					<div id='header-spacing' />
					<Switch>
						<Route exact path='/' component={IntroPage} />
						<Route path='/broadcast' component={BroadcastView} />
						{/* <Route exact path='/1' component={IntroPage} />
						<Route path='/' component={BroadcastView} /> */}
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
