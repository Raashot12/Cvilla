import React from 'react';
import Title from '../Title';

export default function JustDefault() {
    return (
        <div className="just-default">
           <div className="inside-container">
               <Title title="Aerial view" color="#aab5b9" />

               <div className="just-default-center">
                   <div className="just-texts">
						<p>C-villa  is a top-notch arena for optimum relaxation center, with clean seats, nice environment good music and cold drinks, make it a nicer place to relax and think of the next multi-million dollar move.</p>

                   </div>
                   <div className="just-video">
						<iframe width="480" height="360" title="villa" src="https://www.youtube.com/embed/zJYO2dETR2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ border: "none" }}></iframe>
                   </div>
               </div>
           </div>
        </div>
    )
}
