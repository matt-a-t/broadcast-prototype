import React from 'react' //eslint-disable-line no-unused-vars

import { inputStyle, labelStyle, formGroupStyle } from './styles.js'
import Spacer from './spacer' //eslint-disable-line no-unused-vars

const deliveryTab = () => (
	<div style={{width: '90%', marginLeft: '5%', marginTop: '30px'}}>
		<div style={formGroupStyle}>
			<span style={{ ...labelStyle, width:'15%'}}>Customer Accounts</span>
			<select style={{...inputStyle, width:'15%', marginLeft: '0px'}}>
				<option>Equal</option>
				<option>Not Equal</option>
				<option>In</option>
				<option>Not In</option>
			</select>
			<input type='text' style={{...inputStyle, width:'60%', marginLeft: '5%'}} />
		</div>
		<div style={formGroupStyle}>
			<label htmlFor='reportTitle' style={labelStyle}>Name for Report Title</label>
			<input name='reportTitle' type='text' style={{...inputStyle, width: '60%', marginLeft: '5%'}} />
		</div>
		<div style={formGroupStyle}>
			<label htmlFor='anotherUser' style={labelStyle}>Run Reports using the Settings of another user</label>
			<select name='anotherUser' style={{...inputStyle, width:'63%', marginLeft: '5%'}}>
				<option>User 1</option>
				<option>User 2</option>
				<option>User 3</option>
			</select>
		</div>

		<Spacer marginTop='40px' marginBottom='40px' />

		<div style={formGroupStyle}>
			<label htmlFor='outputTo' style={labelStyle}>Output To</label>
			<select name='outputTo' style={{...inputStyle, width:'63%', marginLeft: '5%'}}>
				<option>Std Broadcast</option>
				<option>eFFECTS</option>
			</select>
		</div>
		<div style={formGroupStyle}>
			<label htmlFor='outputFormat' style={labelStyle}>Output Format</label>
			<select name='outputFormat' style={{...inputStyle, width:'63%', marginLeft: '5%'}}>
				<option>PDF</option>
				<option>Word (RTF)</option>
				<option>XLSX File (Formatted)</option>
				<option>XLSX File (Raw Data)</option>
				<option>CSV File (Raw Data)</option>
			</select>
		</div>
	</div>
)

export default deliveryTab