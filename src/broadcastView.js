import React, { Component } from 'react';

class BroadcastView extends Component {
	state = {  }
	render() {
		return (
			<div>
				<li>Broadcast View</li>
					<ul>
						<li>Back to broadcasts button</li>
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