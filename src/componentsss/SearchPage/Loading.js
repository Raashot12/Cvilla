import React, { Component } from 'react'
import logo from './source.gif'


class Loading extends Component {
	render() {
		return (
			<div >
				<img src={logo} alt="" height="100px" width="100px" />
			</div>
		)
	}
}
export default Loading;