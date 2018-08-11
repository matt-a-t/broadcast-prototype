import React, {Component} from 'react' // eslint-disable-line no-unused-vars

class BroadcastRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.broadcast.batchName}</td>
				<td>{this.props.broadcast.accounts}</td>
				<td>{this.props.broadcast.notificationEmails}</td>
				<td>{this.props.broadcast.frequency}</td>
				<td>{this.props.broadcast.runsOn}</td>
				<td>{this.props.broadcast.startsOn}</td>
				<td>{this.props.broadcast.lastRun}</td>
				<td>{this.props.broadcast.nextRun}</td>
				<td>{this.props.broadcast.runStatus}</td>
			</tr>
		)
	}
}

export default BroadcastRow