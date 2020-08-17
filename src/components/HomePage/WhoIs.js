import React from 'react';
import Title from '../Title';

export default function WhoIs() {
    return (
        <div className="whoIs">
           <div className="inside-container">
              <Title title="Why Cvilla ?" color="#e8f4dc" /> 

              <div className="whoIs-center">
                  <div className="texts">
						<p>Cvilla Resort is a luxurious resort with State of the art facilities located in the most serene environment. Our facilities and Services are top-notch with master size swimming, VIP bar, Football, Basketball, tennis and other sports facilities, gym for workout and spur that would make your body feel pampered.</p>
                 </div>
                 <div className="text-icons">
                     <p>Follow us on social media to get recent development and update about CVILLA</p>
                     <div className="media-icons">
                         <a href="/"><i className="fab fa-twitter"></i></a>
                         <a href="/"><i className="fab fa-facebook-f"></i></a>
                         <a href="/"><i className="fab fa-google-plus-g"></i></a>
                         <a href="/"><i className="fab fa-youtube"></i></a>
                         <a href="/"><i className="fab fa-linkedin-in"></i></a>
                         <a href="/"><i className="fab fa-pinterest-p"></i></a>
                     </div>
                 </div>
             </div> 
            </div> 
        </div>
    )
}
