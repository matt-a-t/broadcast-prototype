import React from 'react' // eslint-disable-line no-unused-vars
import ReactTable from 'react-table' // eslint-disable-line no-unused-vars
import 'react-table/react-table.css'
import { Redirect, withRouter } from 'react-router-dom' // eslint-disable-line no-unused-vars

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


const BroadcastList = withRouter(({history}) => (
	<ReactTable
		columns={columns}
		data={broadcastMockData}
		style={{marginTop: '75px', width: '90%', marginLeft: '5%'}} 
		headerSylte={{backgroundColor: Brand.ibank}}
		//className='-striped'
		getTrProps={(state, rowInfo, column, instance) => {
			return { onClick: () => { history.push('/broadcast/') }}
		}}
	/>
))

export default BroadcastList