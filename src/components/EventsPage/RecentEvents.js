import React from 'react'
import Title from '../Title';
import { ProductConsumer } from '../Context/Context';




export default function RecentEvents() {
	return (
		<ProductConsumer>
			{value => {
				return (
					<section className="recentEvents">
						<div className="inside-container">
							<Title title="recent events" colors="#E8F4DC" />
							<div className="recentEvents-center">
								<table className="table">
									<tr>
										<th>Events</th>
										<th>Date</th>
										<th>Place</th>
									</tr>
									{
										value.Events.map(event => {
											return (
												<tr key={event.id}>
													<td>{event.name}</td>
													<td>{event.date}</td>
													<td>{event.area}</td>
												</tr>
											)
										})
									}
								</table>
							</div>
						</div>
					</section>
				)
			}}
		</ProductConsumer>
	)
}
