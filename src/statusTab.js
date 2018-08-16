import React from 'react' //eslint-disable-line no-unused-vars

import { formGroupStyle } from './styles'
import Spacer from './spacer' //eslint-disable-line no-unused-vars

const statusTab = () => (
	<div style={{width: '90%', marginLeft: '5%', marginTop: '30px'}}>
		<h2 style={{textAlign: 'center'}}>This broadcast batch last ran on <span>08/10/2018</span> at <span>8:12 AM</span></h2>
		<h2 style={{textAlign: 'center'}}>The last report date range was <span>08/01/2018</span> to <span>08/08/2018</span></h2>
		
		<Spacer marginBottom='40px' />
		
		<div>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{marginLeft: '20px'}}>Re-run reports for the last report time period</span>
			</div>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{marginLeft: '20px'}}>Hold this broadcast (do not run until this check box is cleared)</span>
			</div>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{marginLeft: '20px'}}>Last run encountered an error (broadcast will not run until this check box is cleared)</span>
			</div>
		</div>
	</div>
)

export default statusTab