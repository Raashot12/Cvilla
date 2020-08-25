import React from 'react';
import './App.css';



class Flightget extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.airline}>

					<input className="Section_1" placeholder="Airline-code" name="airline" />
					<input className="Section_2" name="Operator" placeholder='Operator Name' />
					<input className="Section_3" name="Date" placeholder="FormattedDate" />
					<button >Get detail</button>
				</form>
			</div>
		)
	}
}
export default Flightget;