import React from 'react';
import './App.css';
import Bounce from 'react-reveal'

const Getit = ({ routes }) => {
	const air = routes.map((route, i) => {
       		return<div key={i} className="rocket1">
			<Bounce left duration={3000}>
			<h1> Flight Name:{route.destination.name}</h1>
			<h2> Flight Municipality:{route.destination.municipalityName}</h2>
			<h2> Daily Flight by Average:{route.averageDailyFlights}</h2>
			<h2 className='rocket' key={i}> Flight Operator Name:{route.operators.map((operator, i) => {
				return <p key={i}> Operator Name:{operator.name}</p>
			})}</h2>
			</Bounce>
		</div>
		
	})

	return (

		<div className="air-cover">
			<h1 className="air-cover2"><i className="fas fa-fighter-jet"> </i>Flight Tracking List at Cvilla Resort <i className="fas fa-fighter-jet"></i></h1>
			{air}
		</div>
	)
}
export default Getit;

