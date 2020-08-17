import React from 'react';

import './HomePage.css';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import JustDefault from './JustDefault';
// import Twitter from './Twitter';
import WhoIs from './WhoIs';
import Testimonials from './Testimonials';
import Testimonials2 from './Twitter';
import ContactForm from './ContactForm';


export default function HomePage() {
	return (
		<div>

			<Header />
			<Services />
			<Portfolio />
			<JustDefault />
			{/* <Twitter /> */}
			<WhoIs />
			<Testimonials />
			<Testimonials2 />
			<ContactForm />


		</div>
	)
}
