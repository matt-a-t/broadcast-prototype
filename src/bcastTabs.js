import React from 'react' //eslint-disable-line no-unused-vars

import Brand from './brand'

const tabContainer = {
	background: Brand.ibank,
	marginTop: '75px',
	width: '90%',
	marginLeft: '5%',
	display: 'flex'
}

const tabItem = {
	color: 'white',
	flexGrow: '1',
	textAlign: 'center',
	fontSize: '20px',
	padding: '20px 0',
	border: '1px solid white'
}

const bcastTabs = () => (
	<div style={tabContainer}>
		<div style={{...tabItem, background: Brand.resmarker}}>Reports</div>
		<div style={tabItem}>Schedule</div>
		<div style={tabItem}>Delivery</div>
		<div style={tabItem}>Email</div>
		<div style={tabItem}>Status</div>
	</div>
)

export default bcastTabs