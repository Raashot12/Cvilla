import React from 'react';
import Title from '../Title';

export default function Testimonials() {
    return (
        <div className="testimonial">
             <div className="inside-container">
				<Title title="testimonial..." color="#000000" />
                 <div className="testimonial-center">
                     <div className="testimonial-texts">
						<p>Moving aroud the area searching for places to have fun coz i just moved in to the area and noticed this place. The bar services was superb i even brought my friends afterwards and they all enjoyed hanging out here…… Nice one cvilla</p>
						<blockquote className="quotation">
							"Donald Ohiomohe, Businessman"
						</blockquote>
                     </div>
                     <div className="testimonial-icon">
                         <i className="fas fa-quote-right"></i>
                     </div>
                 </div>
             </div>
        </div>
    )
}
