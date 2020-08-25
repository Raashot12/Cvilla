import React from 'react';
import Active from "./Active"
import Cancelled from "./Cancelled";
import Landed from "./Landed";
import Scheduled from './Scheduled.js'
import Unknown from './Unknown'

// import { render } from '@testing-library/react';
// import SearchPage from './SearchPage';




  export default function Result (props) {
	return renderBasedOnStatus(props)
}

const renderBasedOnStatus = props =>{
	const { status, flightData, airportInfo, airportsInfo } = props;
	switch(status){
		case "U":
		return <Unknown />
		case 'A':
		return(
			<Active flightData={flightData} airportInfo={airportInfo} airportsInfo={airportsInfo} /> 
		);
		case 'C':
		return(
			<Cancelled flightData={flightData} airportInfo={airportInfo} airportsInfo={airportsInfo} />
		);
		case "L":
			return (
				<Landed flightData={flightData} airportInfo={airportInfo} airportsInfo={airportsInfo} />
			);

		case "S":
			return(
				< Scheduled flightData={flightData} airportInfo={airportInfo} airportsInfo={airportsInfo} />
				// airportInfo = { airportInfo }
			);
			default:
				return <p>Unavailable</p>

	
	}
  };


