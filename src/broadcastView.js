import React, { Component } from 'react';

import broadcastMockData from './broadcastMockData'

const broadcast = broadcastMockData.pop();

class BroadcastView extends Component {
	state = {  }
	render() {
		return (
			<div>
				<div>Back to broadcasts button</div>
				<h1 style={{textAlign: 'center'}}>{broadcast.batchName}</h1>
					<ul>
						<li>Left menu</li>
						<ul>
							<li>Broadcast dropdown</li>
							<li>Broadcast buttons</li>
							<ul>
								<li>Copy</li>
								<li>Share</li>
								<li>Delete</li>
							</ul>
							<li>Name change</li>
							<li>Status Info</li>
							<ul>
								<li>Reports</li>
								<li>Schedule</li>
								<li>Delivery</li>
								<li>Email</li>
								<li>Status</li>
							</ul>

							<li>Five Tabs</li>
							<ul>
								<li>Reports</li>
								<li>Schedule</li>
								<li>Delivery</li>
								<li>Email</li>
								<li>Status</li>
							</ul>

							<li>Save Button</li>
						</ul>
					</ul>
			</div>
		);
	}
}

export default BroadcastView;