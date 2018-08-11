import React from 'react' // eslint-disable-line no-unused-vars
import { FaCalendarAlt, FaPlus } from 'react-icons/fa' // eslint-disable-line no-unused-vars

import BroadcastList from './broadcastList2' // eslint-disable-line no-unused-vars
import Brand from './brand'

const headerBarStyle = {
	background: Brand.ibank,
	height: '100px',
	width: '100%',
}

const addButtonStyle = {
	background: Brand.c3,
	borderRadius: '50%',
	color: 'white',
	border: 'solid 2px ' + Brand.c3,
	transform: 'translate(0, 50px)',
	left: '100px',
	position: 'absolute',
	height: '100px',
	width: '100px',
	fontSize: '40px'
}

const searchBarStyle = {
	textAlign: 'center',
	width: '50%',
	height: '50px',
	marginTop: '25px',
	left: '25%',
	position: 'absolute'
}

const calendarButtonStyle = {
	background: Brand.iqcx,
	borderRadius: '50%',
	color: 'white',
	transform: 'translate(0, 50px)',
	right: '100px',
	position: 'absolute',
	height: '100px',
	width: '100px',
	fontSize: '40px',
	border: '0'
	// position: 'absolute',
	// right: '20px',
	// height: '50px',
	// marginTop: '25px'
}

const introPage = () => (
	<div>
		<h1 style={{textAlign:'center'}}>Broadcasts</h1>
		<div id="headerBar" style={headerBarStyle}>
			<button style={addButtonStyle}>
				<FaPlus />
			</button>
			<input type="text" placeholder="search for broadcast" style={searchBarStyle} />
			<button style={calendarButtonStyle}>
				<FaCalendarAlt />
			</button>
		</div>
		<BroadcastList />
	</div>
)

export default introPage
