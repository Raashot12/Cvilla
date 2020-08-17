import React, { Component } from 'react'
import Getit from './Flightget'


export default class Flight extends Component {
	state = {
		routes: []
	}

	componentDidMount() {
		//fetch joke categories
		fetch(`https://cors-anywhere.herokuapp.com/https://aerodatabox.p.rapidapi.com/airports/icao/EDDF/stats/routes/daily?withAircraftImage=true`,
			{
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "aerodatabox.p.rapidapi.com",
					"x-rapidapi-key": "46a3fc47cemsh4f502523cbc8e3bp145ea6jsn850c136e612b"
				}
			})
			.then(response => response.json())
			.then(data => {
				this.setState({
					routes:data.routes
				})
			}).catch(error => {
				console.log(error)
			})

	}


		
	render() {
		const {routes} = this.state
		console.log(routes)
	
		return (
			<div>
			    <Getit routes={routes}/>
         	</div>
		)

	}
}