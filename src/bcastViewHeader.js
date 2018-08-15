import React from 'react'; // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router-dom'
import { FaArrowLeft, FaBars, FaSave, FaEdit, FaCopy, FaShareSquare, FaTrashAlt } from 'react-icons/fa' // eslint-disable-line no-unused-vars
//save, namechange, copy, share, delete
import Brand from './brand'

class bcastViewHeader extends React.Component {
	state = {
		showButtons: false
	}	

	render() {
		const headerBarStyle = {
			background: Brand.ibank,
			height: '100px',
			width: '100%',
		}

		const buttonStyle = {
			borderRadius: '50%',
			color: 'white',
			border: 0,
			position: 'absolute',
			height: '100px',
			width: '100px',
			fontSize: '40px'
		}
		
		const backButtonStyle = {
			background: Brand.iqcx,
			borderRadius: '50%',
			color: 'white',
			border: 0,
			transform: 'translate(0, 50px)',
			left: '100px',
			position: 'absolute',
			height: '100px',
			width: '100px',
			fontSize: '40px'
		}

		const saveButtonStyle = {
			...buttonStyle,
			background: Brand.c3,
			left: '50%',
			transform: 'translate(-50px, 50px)',
			
		}
		
		const menuButtonStyle = {
			background: Brand.autopay,
			borderRadius: '50%',
			color: 'white',
			transform: 'translate(0, 50px)',
			right: '100px',
			position: 'absolute',
			height: '100px',
			width: '100px',
			fontSize: '40px',
			border: '0'
		}
		
		const nameChangeStyle = {
			background: Brand.iqcx,
			borderRadius: '50%',
			color: 'white',
			transform: 'translate(0,150px)',
			right: '100px',
			position: 'absolute',
			height: '100px',
			width: '100px',
			fontSize: '40px',
			border: '0',
		}

		const copyStyle = {
			...buttonStyle,
			background: Brand.c3,
			right: '100px',
			transform: 'translate(0, 250px)'
		}

		const shareStyle = {
			...buttonStyle,
			background: Brand.resmarker,
			right: '100px',
			transform: 'translate(0, 350px)'
		}

		const deleteStyle = {
			...buttonStyle,
			background: 'red',
			right: '100px',
			transform: 'translate(0, 450px)'
		}
		
		const showButtons = () => {
			const newValue = !this.state.showButtons
			this.setState({showButtons:newValue})
		}
		
		const { history } = this.props

		return (
			<div style={headerBarStyle}>
				<button style={backButtonStyle} onClick={() => { history.push('/') }}>
					<FaArrowLeft />
				</button>
				<button style={saveButtonStyle}>
					<FaSave />
				</button>
				<button style={menuButtonStyle} onClick={ showButtons }>
					<FaBars />
				</button>
				{this.state.showButtons &&
					<div>
						<button style={nameChangeStyle}>
							<FaEdit />
						</button>
						<button style={copyStyle}>
							<FaCopy />
						</button>
						<button style={shareStyle}>
							<FaShareSquare />
						</button>
						<button style={deleteStyle}>
							<FaTrashAlt />
						</button>
					</div>
				}
			</div>
		)
	}
}

export default withRouter(bcastViewHeader)