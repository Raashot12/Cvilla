import React from 'react'

export default function Scheduled({ flightData, airportInfo, airportsInfo }) {
	const { arrivalDate } = flightData;
	// const { arrival, departure } = airportInfo
	return (
		<div>
			<div>
				<div style={{ display: "flext", alignItems: "center" }}>
					<h3 style={{ color: 'white' }}>
						Status: <span style={{ color: 'green' }}>Landed</span>
					</h3>

				</div>
			</div>
			<div>
				<div>Arrival Time : {arrivalDate.dateLocal}</div>
			</div>
			<div
				style={{
					borderTop:
						"2px Solid Gray",
					padding: 10,
					display: "flex",
					marginTop: 10,
				}}>

			</div>
			<div style={{ flex: 1 }}>
				<h4 style={{ color: "green" }}> Arrival :</h4>
				<div>
					<div>
						{/* {arrival.name} {arrival.fs}  */}
						{airportInfo.name}  {airportInfo.fs}
					</div>
					<div>
						{/* {arrival.city} {arrival.countryName} */}
						{airportInfo.city} 	{airportInfo.countryName}
					</div>
				</div>
			</div>
			<div style={{ flex: 1 }}>
				<h4 style={{ color: "red" }}> Departure :</h4>
				<div>
					<div> 
						{/* {departure.name} {departure.fs}  */}
						{airportsInfo.name} {airportsInfo.fs}
					</div>
					<div>
						{/* {departure.city} {departure.countryName} */}
						{airportsInfo.city}  {airportsInfo.countryName}
					</div>
				</div>
			</div>
		</div>
	)
}