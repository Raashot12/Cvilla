import React from 'react'

export default function Scheduled({ flightData, airportInfo  }) {
	// const { departureDate } = flightData;
	// const { airports } = airportInfo
	return (
		<div>
			<div>
				<div style={{ display: "flext", alignItems: "center" }}>
					<h3 style={{ color: 'white' }}>
						Status: <span style={{ color: 'green' }}>Cancelled</span>
					</h3>

				</div>
			</div>
			{/* <div>
				<div>Time To take-off: {departureDate.dateLocal}</div>
			</div> */}
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
					{/* <div>{arrival} </div> */}
					{/* </div>
					<div>
						{airportInfo.city} {airportInfo.countryName} */}
						Flight has been Cancelled
				</div>
			</div>
			<div style={{ flex: 1 }}>
				<h4 style={{ color: "red" }}> Departure:</h4>
				<div>
					{/* <div> {departure.name}  
					</div>
					<div>{departure.city} {departure.countryName}
					</div> */}
					Flight has been Cancelled
				</div>
			</div>
		</div>
	)
}




