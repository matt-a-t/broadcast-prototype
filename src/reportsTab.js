import React from 'react' //eslint-disable-line no-unused-vars
import { FaPlus } from 'react-icons/fa'

import Brand from './brand'

const headingContainer = {
	background: 'white',
	// marginTop: '75px',
	width: '90%',
	marginLeft: '5%',
	display: 'flex'
}

const headingItem = {
	flexBasis: '0',
	color: 'grey',
	flexGrow: '1',
	textAlign: 'center',
	fontSize: '20px',
	padding: '20px 0',
	border: '1px solid white',
	cursor: 'pointer'
}

const addButtonStyle = {
	backgroundColor: Brand.c3,
	borderRadius: '50%',
	color: 'white',
	border: 0,
	// position: 'absolute',
	height: '50px',
	width: '50px',
	fontSize: '20px'
}

const inputStyle = {
	width: '80%',
	marginLeft: '10%',
	padding: '15px'
}

const reportsTab = () => (
	<div>
		<div style={ headingContainer }>
			<div style={ headingItem }>Report Category</div>
			<div style={ headingItem }>Report Name</div>
			<div style={ headingItem }>Date Range Type</div>
			<div style={ headingItem }>Add/Remove</div>
		</div>
		<div style={ headingContainer }>
			<div style={ headingItem }>
				<select name="reportCategory" style={ inputStyle }>
					<option value='reservation'>Reservation</option>
					<option value='backOffice'>Back Office</option>
				</select>
			</div>
			<div style={ headingItem }>
				<input type='text' style={ inputStyle } />
			</div>
			<div style={ headingItem }>
				<select name="dateRangeType" style={ inputStyle }>
					<option value='departure'>Departure</option>
					<option value='invoice'>Invoice</option>
					<option value='booked'>Booked</option>
				</select>
			</div>
			<div style={ headingItem }>
				<button style={addButtonStyle}>
					<FaPlus />
				</button>
			</div>
		</div>
	</div>
)

export default reportsTab