import React from 'react' // eslint-disable-line no-unused-vars

import { withRouter } from 'react-router-dom'

import BcastViewHeader from './bcastViewHeader'
import BcastTabs from './bcastTabs'

import Brand from './brand'
import broadcastMockData from './broadcastMockData'
const broadcast = broadcastMockData.pop()


const BroadcastView = () => (
	<div>
		<h1 style={{textAlign: 'center'}}>{broadcast.batchName}</h1>
		
		<BcastViewHeader />
		
		<BcastTabs />
	</div>
)

export default withRouter(BroadcastView)