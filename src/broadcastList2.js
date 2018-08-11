import React from 'react' // eslint-disable-line no-unused-vars
import ReactTable from 'react-table' // eslint-disable-line no-unused-vars
import 'react-table/react-table.css'
import BroadcastRow from './broadcastRow' // eslint-disable-line no-unused-vars

import broadcastMockData from './broadcastMockData'
import Brand from './brand'

const columns = [
	{
		Header: 'Batch Name',
		accessor: 'batchName'
	}, {
		Header: 'Accounts',
		accessor: 'accounts'
	}, {
		Header: 'Notification Emails',
		accessor: 'notificationEmails'
	}, {
		Header: 'Frequency',
		accessor: 'frequency'
	}, {
		Header: 'Runs On',
		accessor: 'runsOn'
	}, {
		Header: 'Starts On',
		accessor: 'startsOn'
	}, {
		Header: 'Last Run',
		accessor: 'lastRun'
	}, {
		Header: 'Next Run',
		accessor: 'nextRun'
	}, {
		Header: 'Run Status',
		accessor: 'runStatus'
	}
]


const BroadcastList = () => (
	<ReactTable
		columns={columns}
		data={broadcastMockData}
		style={{marginTop: '75px'}} 
		headerSylte={{backgroundColor: Brand.ibank}}
	/>
)

export default BroadcastList