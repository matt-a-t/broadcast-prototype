import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom' // eslint-disable-line no-unused-vars

import Navmenu from './navMenu' // eslint-disable-line no-unused-vars
import IntroPage from './introPage'
import BroadcastView from './broadcastView'
import Footer from './footer' // eslint-disable-line no-unused-vars

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<img src='https://apps.dev.ciswired.com/tempimages/DEMO_login_logo.jpg' alt="Logo" />
						<Navmenu />
					</header>
					<div id='header-spacing' />
					<Switch>
						<Route exact path='/' component={IntroPage} />
						<Route path='/broadcast' component={BroadcastView} />
					</Switch>
					
					<div style={{height: '118px'}} />
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
