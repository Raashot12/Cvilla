import React from 'react';
import './Inspirations.css';
import Title from '../Title';
import Bounce from 'react-reveal/Bounce'

export default function InspirationsPage() {
	return (
		<React.Fragment>
			<section className="inspirations">
				<div className="inside-container">
					<Title title="kind of inpirations" />
					<div className="inspirations-center">
						{/* single inspiration */}
						<Bounce left>
						<div className="single-inspiration" style={{ backgroundImage: "url(images/decor1.jpg)" }}>

						</div>
						</Bounce>

						{/* single inspiration */}
						<Bounce left>
						<div className="single-inspiration" style={{ backgroundImage: "url(images/decor2.jpg)" }}>

						</div>
						</Bounce>

						{/* single inspiration */}
						<Bounce left>
						<div className="single-inspiration" style={{ backgroundImage: "url(images/decor3.jpg)" }}>

						</div>
						</Bounce>

						{/* single inspiration */}
						<Bounce left>
						<div className="single-inspiration" style={{ backgroundImage: "url(images/decor4.jpg)" }}>

						</div>
						</Bounce>


					</div>
				</div>
			</section>
		</React.Fragment>
	)
}
