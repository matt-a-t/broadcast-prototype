import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IntroPage from './introPage'
import BroadcastView from './broadcastView'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					
					<Switch>
						<Route exact path='/' component={IntroPage} />
						<Route path='/broadcast' component={BroadcastView} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
