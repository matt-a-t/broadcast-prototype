import React from 'react' //eslint-disable-line no-unused-vars
import { FaCaretDown, FaHome, FaWrench, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa'

const menuItemStyle = {
	// display: 'flex'
	flexGrow: '1',
	textAlign: 'center',
	paddingTop: '15px',
	fontSize: '20px',
	color: 'grey',
	cursor: 'pointer'
}

const navMenu = () => (
	<div style={{
		// border: '1px solid black',
		height: '50px',
		width: '50%',
		position: 'relative',
		right: '10px',
		top: '10px',
		float: 'right',
		display: 'flex'
	}}>
		<div style={menuItemStyle}><FaHome /> Home <FaCaretDown /></div>
		<div style={menuItemStyle}><FaWrench /> Tools <FaCaretDown /></div>
		<div style={menuItemStyle}><FaCog /> Admin <FaCaretDown /></div>
		<div style={menuItemStyle}><FaQuestionCircle /> Help <FaCaretDown /></div>
		<div style={menuItemStyle}><FaSignOutAlt /> Logout</div>
	</div>
)

export default navMenu