import React from 'react' //eslint-disable-line no-unused-vars

import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import * as moment from 'moment'

const inputStyle = {
	width: '60%',
	marginLeft: '10%',
	padding: '15px'
}

const labelStyle = {
	display: 'inline-block',
	width: '30%',
}

const formGroupStyle = {
	display: 'block',
	padding: '10px'
}

const scheduleTab = () => (
	<div style={{width: '90%', marginLeft: '5%', marginTop: '30px'}}>
		<div style={{width: '50%', display: 'inline-block'}}>
			<div style={formGroupStyle}>
				<label for='scheduleFor' style= { labelStyle }>Schedule For:</label>
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
				<label for='frequency' style= { labelStyle }>Frequency:</label>
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
				<label for='runReportOn' style={ labelStyle }>Run Report On:</label>
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
				<label for='weekStartsOn' style={ labelStyle }>Week Starts On:</label>
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

		<DateRangePicker 
			startDate={moment('8/12/2018')}
			startDateId='somethingunique'
			endDate={moment('8/12/2018')}
			endDateId='somethingunique2'
			onChange={(startDate, endDate) => console.log(startDate + ', ' + endDate)}
			focusedInput='something'
			onFocusChange={focusedInput => console.log(focusedInput)}
		/>
		
		<li>Next report period - date range</li>
		<li>Next run date: - date</li>
		<li>Not before: - time (based on time zone in your User settings)</li>
		<li>Always run this broadcast for date period specified (on the schedule specified above)</li>
		<li>Run this broadcast ONE TIME for date period specified</li>
		<li>Run this broadcast for data updated since the last time the broadcast ran (for reservation data only)</li>
	</div>
)

export default scheduleTab