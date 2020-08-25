import React from 'react'

export default function Unknown() {
	// const { operationalTimes } = flightData;
	// const { arrival, departure } = airportInfo
	return (
		<div>
			<div>
				<div style={{ display: "flext", alignItems: "center" }}>
					<h3 style={{ color: 'white' }}>
						status: <span style={{ color: 'green' }}>UnKnown</span>
					</h3>

				</div>
			</div>
			<div>
				{/* <div>Time To Land: {operationalTimes.arrivalDate.dateLocal}</div> */}
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
				<h4 style={{ cloro: "green" }}> Arrival</h4>
				<div>
					{/* <div>{arrival.name} {arrival.fs} </div>
					<div>
						{arrival.city} {arrival.countryName}
					</div> */}
				</div>
			</div>
			<div style={{ flex: 1 }}>
				<h4 style={{ cloro: "green" }}> Departure</h4>
				<div>
					{/* <div> {departure.name} {departure.fs} </div>
					<div>{departure.city} {departure.countryName}</div> */}
				</div>
			</div>
		</div>
	)
}