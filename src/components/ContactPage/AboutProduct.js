import React from 'react';
import Title from '../Title';


export default function AboutProduct() {
	return (
		<div className="aboutContact">
			<div className="inside-container">
				<Title title="contact us" colors="#E8F4DC" />
				<div className="aboutContact-center">

					<div className="aboutContact-info">
						<p><span><i className='fas fa-user'></i></span>CVILLA</p>

						<p><span><i className='fas fa-phone-alt'></i></span>+234-7032623818</p>

						<p><span><i className='fas fa-envelope'></i></span> info@cvillaresort.com</p>

						<p><span><i className='fas fa-user'></i></span>Road 45, off Muiz Banire, By Abraham Adesanya, Ajah, Lekki.</p>
					</div>

					<div className="aboutContact-form">
						<form >
							<div className="inputs">
								<label htmlFor="name">name</label><br />
								<input type="text" />
							</div>

							<div className="inputs">
								<label htmlFor="name">email</label><br />
								<input type="email" />
							</div>
							<div className="textarea">
								<label htmlFor="message">message</label>
								<textarea name="" id="" cols="30" rows="5"></textarea>
							</div>

							<button type="button" className="btn">Submit</button>


						</form>
					</div>

				</div>


			</div>
		</div>
	)
}
