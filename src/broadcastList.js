import React from 'react' // eslint-disable-line no-unused-vars

import BroadcastRow from './broadcastRow' // eslint-disable-line no-unused-vars

import broadcastMockData from './broadcastMockData'

const tableStyle = {
	width: '90%',
	marginTop: '75px',
	marginLeft: '5%'
}

const renderBroadcasts = broadcastMockData.map(broadcast => {
	return(
		<BroadcastRow broadcast={broadcast} />
	)	
})

const BroadcastList = () => (
	<div>
		<table style={tableStyle}>
			<thead>
				<tr>
					<th>Batch Name</th>
					<th>Accounts</th>
					<th>Notification Emails</th>
					<th>Frequency</th>
					<th>Runs On</th>
					<th>Starts On</th>
					<th>Last Run</th>
					<th>Next Run</th>
					<th>Run Status</th>
				</tr>
			</thead>
			<tbody>
				{ renderBroadcasts }
			</tbody>
		</table>
	</div>
)

export default BroadcastList