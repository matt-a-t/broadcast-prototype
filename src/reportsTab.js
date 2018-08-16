import React from 'react' //eslint-disable-line no-unused-vars
import { FaPlus, FaTrashAlt } from 'react-icons/fa' //eslint-disable-line no-unused-vars

import Spacer from './spacer'

import Brand from './brand'

const headingContainer = {
	background: 'white',
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
}

const addButtonStyle = {
	backgroundColor: Brand.c3,
	borderRadius: '50%',
	color: 'white',
	border: 0,
	height: '50px',
	width: '50px',
	fontSize: '20px',
	cursor: 'pointer'
}

const inputStyle = {
	width: '80%',
	marginLeft: '10%',
	padding: '15px'
}

const reports = [
	{
		key: 0,
		category: 'Reservation',
		reportName: 'Air Activity',
		dateRangeType: 'Booked'
	},
	{
		key: 1,
		category: 'Back Office',
		reportName: 'Transaction Analysis by CC',
		dateRangeType: 'Invoice'
	}
]

class reportsTab extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			reports: reports
		}

		this.addReport = this.addReport.bind(this)

	}

	addReport() {
		const newReport = {
			key: this.state.reports.length + 1,
			category: document.getElementById('reportCategory').value,
			reportName: document.getElementById('reportName').value,
			dateRangeType: document.getElementById('dateRangeType').value
		}

		this.setState(prevState => {
			return {reports: [...prevState.reports, newReport]}
		})
	}

	removeReport(key) {
		const newReports = this.state.reports
		for(var i=0; i < newReports.length; i++) {
			if(newReports[i].key === key) {
				newReports.splice(i, 1)
				break
			}
		}

		this.setState(() => {return {reports: newReports}})
	}

	render() {
		const renderReports = this.state.reports.map(report =>
			<div style={headingContainer} key={report.key}>
				<div style={{...headingItem, color:'black'}}>
					{report.category}
				</div>
				<div style={{...headingItem, color:'black'}}>
					{report.reportName}
				</div>
				<div style={{...headingItem, color:'black'}}>
					{report.dateRangeType}
				</div>
				<div style={{...headingItem, color:'black'}}>
					<button style={{...addButtonStyle, background:'red'}} onClick={() => this.removeReport(report.key)}>
						<FaTrashAlt />
					</button>
				</div>
			</div>
		)

		return (
			<div>
				<div style={ headingContainer }>
					<div style={ headingItem }>Report Category</div>
					<div style={ headingItem }>Report Name</div>
					<div style={ headingItem }>Date Range Type</div>
					<div style={ headingItem }>Add/Remove</div>
				</div>

				<Spacer />

				<div style={ headingContainer }>
					<div style={ headingItem }>
						<select name="reportCategory" id='reportCategory' style={ inputStyle }>
							<option value='Reservation'>Reservation</option>
							<option value='Back Office'>Back Office</option>
						</select>
					</div>
					<div style={ headingItem }>
						<input type='text' style={ inputStyle } id='reportName'/>
					</div>
					<div style={ headingItem }>
						<select name="dateRangeType" style={ inputStyle } id='dateRangeType'>
							<option value='Departure'>Departure</option>
							<option value='Invoice'>Invoice</option>
							<option value='Booked'>Booked</option>
						</select>
					</div>
					<div style={ headingItem }>
						<button style={addButtonStyle} onClick={this.addReport}>
							<FaPlus />
						</button>
					</div>
				</div>

				<Spacer marginBottom='40px' />

				{ renderReports }

			</div>
		)
	}
}

export default reportsTab