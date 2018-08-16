import React from 'react' // eslint-disable-line no-unused-vars

import Brand from './brand'

const footerStyle = {
	textAlign: 'center',
	padding: '5px',
	borderTop: '3px solid' + Brand.ibank,
	color: 'black',
	fontSize: '0.8em',
	lineHeight: '14px',
	// position: 'relative',
	bottom: '0',
	width: '90%',
	marginLeft: '5%',
	marginTop: '40px',
	position: 'fixed',
	background: 'white'
}

const Footer = () => (
	<div>
		<div class="Row" id="footer" style={footerStyle}>
					
			<br clear="all" />
					Disclaimer: Users of this site agree to be bound by the terms of the Cornerstone Information Systems Inc. Website Rules and Regulations. 					
			<br clear="all" />
			<a href="#">Terms of Use</a> | <a href="#"> Privacy Statement</a> | <a href="#">Contact Us</a>
			<br clear="all" />
					Copyright © 2001-2018 Cornerstone Information Systems, Inc. All Rights Reserved. Version 5.0					
			<br clear="all" />
			<br clear="all" />
				
		</div>
	</div>
)

export default Footer