import React from 'react' // eslint-disable-line no-unused-vars

import Brand from './brand'

const Spacer = (props) => (
	<div style={{
		width: '80%', 
		marginLeft:'10%', 
		height: '3px', 
		backgroundColor: Brand.ibank, 
		marginTop: props.marginTop,
		marginBottom: props.marginBottom}} />
)

export default Spacer