import React from 'react' //eslint-disable-line no-unused-vars

const statusTab = () => (
	<div>
		statusTab
		<li>This broadcast batch last run on $date at $time</li>
		<li>The last report date range was $date to $date</li>
		<li>Re-run reports for the last report time period</li>
		<li>Hold this broadcast (do not run until this check box is cleared)</li>
		<li>Last run encountered an error (broadcast will not run until this check box is cleared)</li>
	</div>
)

export default statusTab