import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './Context/Context';


export default function Footer() {
	return (
		<ProductConsumer>
			{value => {
				return (
					<footer className="footers" >
						<ul>

							{
								value.links.map(links => {
									return (
										<li key={links.id}  ><Link to={links.path}>{links.link}</Link></li>
									)
								})
							}

						</ul>
					</footer>
				)
			}}
		</ProductConsumer>
	)
}
