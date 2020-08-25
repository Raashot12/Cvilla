import React from 'react'
import Flightget from './Flightget';
import FlightHeader from './FlightHeader'




export default class Flight extends Component {

	state = {
		airline: []
	}

	componentDidMount(e) {
		e.preventDefault()
		fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/QR/241/dep/2020/8/18`,
			{
				"method": "GET",
				"headers": {
					appId: "a052bb44",
					appKey: "d5d28ccb205d90d6fc5e845f8830340a"
				}
			})
			.then(response => response.json())
			.then(data => {

				this.setState({
					airline: data
				})
			}).catch(error => {
				console.log(error)
			})

	}


	render() {
		const { airline } = this.state

		return (
			<div >
				<FlightHeader />
				<Flightget airline={airline} />
			</div>
		)

	}
}




























// export default class Flight extends Component {
// 	state = {
// 		routes: []
// 	}

// 	componentDidMount() {
// 		//fetch joke categories
// 		fetch(`https://cors-anywhere.herokuapp.com/https://aerodatabox.p.rapidapi.com/airports/icao/EDDF/stats/routes/daily?withAircraftImage=true`,
// 			{
// 				"method": "GET",
// 				"headers": {
// 					"x-rapidapi-host": "aerodatabox.p.rapidapi.com",
// 					"x-rapidapi-key": "46a3fc47cemsh4f502523cbc8e3bp145ea6jsn850c136e612b"
// 				}
// 			})
// 			.then(response => response.json())
// 			.then(data => {
// 				this.setState({
// 					routes:data.routes
// 				})
// 			}).catch(error => {
// 				console.log(error)
// 			})

// 	}



// 	render() {
// 		const {routes} = this.state
// 		console.log(routes)

// 		return (
// 			<div>
// 			    <Getit routes={routes}/>
//          	</div>
// 		)

// 	}
// }