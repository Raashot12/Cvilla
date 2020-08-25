import React from 'react'

export default function Active({ flightData, airportInfo, airportsInfo}) {
	const {arrivalDate} = flightData;

	return(
		<div>
			<div>
				<div style={{display: "flext", alignItems: "center"}}>
					<h3 style={{ color: 'white' }}>
						Status: <span style={{color:'green'}}>In Air</span>
					</h3>

				</div>
			</div>
			<div>
				<div>Time To Take-off: {arrivalDate.dateLocal}</div>
			</div>
			<div
			style ={{borderTop: 
				"2px Solid Gray",
				padding:10,
				display: "flex",
				marginTop: 10,		
				}}>

			</div>
			<div style={{flex: 1}}>
				<h4 style={{ color:"green"}}> Arrival</h4>
			<div>
					<div>{airportInfo.name}  {airportInfo.fs} </div>		
				<div>
						{airportInfo.city} 	{airportInfo.countryName}
				</div>
			</div>
			</div>
			<div style={{flex:1}}>
				<h4 style={{ color: "red" }}> Departure</h4>
				<div>
					<div> 	{airportsInfo.name} {airportsInfo.fs} </div>
				<div>
						{airportsInfo.city}  {airportsInfo.countryName}</div>
				</div>
			</div>
		</div>
	)
}