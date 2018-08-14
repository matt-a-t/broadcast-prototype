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
	border: '1px solid white',
	cursor: 'pointer'
}

const tabItemActive = {
	...tabItem,
	background: Brand.resmarker
}

const bcastTabs = (props) => (
	<div style={tabContainer}>
		{/* <div style={{...tabItem, background: Brand.resmarker}}>Reports</div> */}
		<div style={ props.activeTab === 'reports' ? tabItemActive : tabItem } onClick={() => props.tabClick('reports')}>Reports</div>
		<div style={ props.activeTab === 'schedule' ? tabItemActive : tabItem } onClick={() => props.tabClick('schedule')}>Schedule</div>
		<div style={ props.activeTab === 'delivery' ? tabItemActive : tabItem } onClick={() => props.tabClick('delivery')}>Delivery</div>
		<div style={ props.activeTab === 'email' ? tabItemActive : tabItem } onClick={() => props.tabClick('email')}>Email</div>
		<div style={ props.activeTab === 'status' ? tabItemActive : tabItem } onClick={() => props.tabClick('status')}>Status</div>
	</div>
)

export default bcastTabs