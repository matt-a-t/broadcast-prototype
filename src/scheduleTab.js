import React from 'react' //eslint-disable-line no-unused-vars

import Spacer from './spacer' //eslint-disable-line no-unused-vars

import Brand from './brand'

import { inputStyle, labelStyle, formGroupStyle } from './styles.js'

const scheduleTab = () => (
	<div style={{width: '90%', marginLeft: '5%', marginTop: '30px'}}>
		<div style={{width: '50%', display: 'inline-block'}}>
			<div style={formGroupStyle}>
				<label for='scheduleFor' style= { labelStyle }>Schedule For</label>
				<select name='scheduleFor' style={ inputStyle }>
					<option value='1'>Back Office</option>
					<option value='2'>Reservation</option>
					<option value='3'>Reservation (previous day)</option>
					<option value='4'>Reservation (previous week)</option>
					<option value='5'>Reservation (previous moth)</option>
					<option value='6'>Back Office (next week)</option>
					<option value='7'>Back Office (previous day)</option>			
				</select>
			</div>
			<div style={formGroupStyle}>
				<label for='frequency' style= { labelStyle }>Frequency</label>
				<select name='frequency' style= { inputStyle }>
					<option value='1'>Weekly</option>
					<option value='2'>Bi-Weekly</option>				
					<option value='3'>Monthly</option>
					<option value='4'>Bi-Monthly</option>
					<option value='5'>Daily</option>
					<option value='6'>Daily - Prior Business Day</option>
					<option value='7'>Daily - Next Business Day</option>
					<option value='8'>Current Day</option>
					<option value='9'>Quarterly</option>
					<option value='10'>Semi-Annual</option>
					<option value='11'>Annual</option>
					<option value='12'>Daily Every X Hours</option>
					<option value='13'>Daily Every X Minutes</option>
				</select>
			</div>
		</div>
		<div style={{width: '50%', display: 'inline-block'}}>
			<div style={formGroupStyle}>
				<label for='runReportOn' style={ labelStyle }>Run Report On</label>
				<select name='runReportOn' style={ inputStyle }>
					<option value='1'>Monday</option>
					<option value='2'>Tuesday</option>
					<option value='3'>Wednesday</option>
					<option value='4'>Thursday</option>
					<option value='5'>Friday</option>
					<option value='6'>Saturday</option>
					<option value='7'>Sunday</option>
				</select>
			</div>
			<div style={formGroupStyle}>
				<label for='weekStartsOn' style={ labelStyle }>Week Starts On</label>
				<select name='weekStartsOn' style={ inputStyle }>
					<option value='1'>Monday</option>
					<option value='2'>Tuesday</option>
					<option value='3'>Wednesday</option>
					<option value='4'>Thursday</option>
					<option value='5'>Friday</option>
					<option value='6'>Saturday</option>
					<option value='7'>Sunday</option>
				</select>
			</div>
		</div>

		<Spacer marginTop='40px' />

		<h2 style={{textAlign: 'center', marginTop: '40px'}}>Next Report Period</h2>
		<div style={{width: '50%', display: 'inline-block'}}>
			<div style={formGroupStyle}>
				<label for='startDate' style={ labelStyle }>Start</label>
				<input name='startDate' type='date' style={ inputStyle } />
			</div>
		</div>

		<div style={{width: '50%', display: 'inline-block'}}>
			<div style={formGroupStyle}>
				<label for='endDate' style={ labelStyle }>End</label>
				<input name='endDate' type='date' style={ inputStyle } />
			</div>
		</div>

		<Spacer marginTop='40px' />

		<h2 style={{textAlign: 'center', marginTop: '40px'}}>Next Run Date</h2>
		<div style={{width: '50%', display: 'inline-block'}}>
			<div style={formGroupStyle}>
				<label for='endDate' style={ labelStyle }>Next Run</label>
				<input name='endDate' type='date' style={ inputStyle } />
			</div>
		</div>
		<div style={{width: '50%', display: 'inline-block'}}>
			<div style={formGroupStyle}>
				<label for='endDate' style={ labelStyle }>Not before</label>
				<input name='endDate' type='time' style={ inputStyle } />
			</div>
		</div>

		<Spacer marginTop='40px' />

		<div style={{marginTop: '40px'}}>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{ marginLeft: '20px'}}>Always run this broadcast for date period specified (on the schedule specified above)</span>
			</div>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{ marginLeft: '20px'}}>Run this broadcast ONE TIME for date period specified</span>
			</div>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{ marginLeft: '20px'}}>Run this broadcast for data updated since the last time the broadcast ran</span>
			</div>
		</div>
	</div>
)

export default scheduleTab