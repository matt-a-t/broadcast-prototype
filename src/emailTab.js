import React from 'react' //eslint-disable-line no-unused-vars

import { inputStyle, labelStyle, formGroupStyle } from './styles.js'
import Spacer from './spacer' //eslint-disable-line no-unused-vars

const inputStyle2 = { ...inputStyle, width:'60%', marginLeft: '5%' }

const emailTab = () => (
	<div style={{width: '90%', marginLeft: '5%', marginTop: '30px'}}>
		<div style={formGroupStyle}>
			<label htmlFor='notificationAddresses' style={labelStyle}>Notification Addresses</label>
			<input name='notificationAddresses' type='text' style={inputStyle2} />
		</div>
		<div style={formGroupStyle}>
			<label htmlFor='senderAddress' style={labelStyle}>Sender Address</label>
			<input name='senderAddress' type='text' style={inputStyle2} />
		</div>
		<div style={formGroupStyle}>
			<label htmlFor='senderName' style={labelStyle}>Sender Name:</label>
			<input name='senderName' type='text' style={inputStyle2} />
		</div>
		<div style={formGroupStyle}>
			<label htmlFor='subject' style={labelStyle}>Subject (optional):</label>
			<input name='subject' type='text' style={inputStyle2} />
		</div>

		<Spacer marginTop='40px' />

		<div style={{marginTop: '40px'}}>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{ marginLeft: '20px'}}>Do not send email when no data found for all reports</span>
			</div>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{ marginLeft: '20px'}}>Send email in event of failure to Sender Address</span>
			</div>
			<div style={formGroupStyle}>
				<input type='checkbox' />
				<span style={{ marginLeft: '20px'}}>Display user id of broadcast originator in the email message</span>
			</div>
		</div>

		<Spacer marginTop='40px' />

		<div style={{marginTop: '40px'}}>
			<div style={{width:'50%', display:'inline-block'}}>
				<div style={formGroupStyle}>
					<label htmlFor='emailFormat' style={labelStyle}>Email Format</label>
					<select name='emailFormat' style={inputStyle2}>
						<option>Plain Text</option>
						<option>HTML</option>
						<option>Plain Text with attached HTML</option>
					</select>
				</div>
			</div>
			<div style={{width:'50%', display: 'inline-block'}}>
				<div style={formGroupStyle}>
					<label htmlFor='emailLanguage' style={labelStyle}>Email Language:</label>
					<select name='emailLanguage' style={inputStyle2}>
						<option>English</option>
						<option>Spanish</option>
						<option>German</option>
						<option>French</option>
						<option>Elvish</option>
						<option>Dothraki</option>
					</select>
				</div>
			</div>
		</div>
	</div>
)

export default emailTab