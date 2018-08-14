/* eslint-disable no-unused-vars */
import React from 'react'

import { withRouter } from 'react-router-dom'

import BcastViewHeader from './bcastViewHeader'
import BcastTabs from './bcastTabs'
import ReportsTab from './reportsTab'
import ScheduleTab from './scheduleTab'
import DeliveryTab from './deliveryTab'
import EmailTab from './emailTab'
import StatusTab from './statusTab'

import Brand from './brand'
import broadcastMockData from './broadcastMockData'
const broadcast = broadcastMockData.pop()
/* eslint-enable no-unused-vars */


class BroadcastView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTab: 'schedule'
		}
		
		this.tabClick = this.tabClick.bind(this)
	}

	tabClick(newTab) {
		this.setState({activeTab: newTab})
	}

	render() {
		const activeTab = this.state.activeTab
		const pageHolderStyle = {
			// border: '1px solid black',
			width: '95%',
			marginLeft: '2.5%'
		}
		return (
			<div>
				<h1 style={{textAlign: 'center'}}>{broadcast.batchName}</h1>
				
				<BcastViewHeader />
				
				<BcastTabs activeTab={this.state.activeTab} tabClick={this.tabClick} />

				<div style={ pageHolderStyle }>
					{ activeTab === 'reports' && <ReportsTab /> }
					{ activeTab === 'schedule' && <ScheduleTab /> }
					{ activeTab === 'delivery' && <DeliveryTab /> }
					{ activeTab === 'email' && <EmailTab /> }
					{ activeTab === 'status' && <StatusTab /> }
				</div>
			</div>
		)
	}
}

export default withRouter(BroadcastView)