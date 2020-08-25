import React from 'react'

export default function Scheduled({ flightData, airportInfo, airportsInfo }) {
	const {departureDate } = flightData;
	// const { arrival, departure } =airportInfo
	return (
		<div>
			<div>
				<div style={{ display: "flext", alignItems: "center" }}>
					<h3 style={{ color: 'white' }}>
						Status: <span style={{ color: 'green' }}>Scheduled</span>
					</h3>

				</div>
			</div>
			<div>
				<div>Time To take-off: {departureDate.dateLocal}</div>
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
				<h4 style={{ color: "green" }}> Arrival:</h4>
				<div>
					<div>	{airportInfo.name}  {airportInfo.fs} </div>
					<div>
						{airportInfo.city} 	{airportInfo.countryName}
					</div>
				</div>
			</div>
			<div style={{ flex: 1 }}>
				<h4 style={{ color: "red" }}> Departure:</h4>
				<div>
					<div> {airportsInfo.name} {airportsInfo.fs} </div>
					<div>{airportsInfo.city} {airportsInfo.countryName}</div>
				</div>
			</div>
		</div>
	)
}