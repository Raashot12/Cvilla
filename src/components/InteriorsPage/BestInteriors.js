import React from 'react';
import Bounce from 'react-reveal';
import Title from '../Title';
// import BackInterior from '../../images/decor2.jpg';
import {ProductConsumer} from '../Context/Context';

export default function BestInteriors() {
    return (
        <ProductConsumer>
            {value=>{
return(
    <section className="interiors">
        <div className="inside-container">
           <Title title="Best visitors" color="grey" />   
           <div className="interiors-center">
               <div className="interiors-texts">
                   <p><span>I</span>Big personalities are people with a lot of talent in giving different kinds of advice.Their main puspose is to plan a plan.Before the action they take into consideration some important factors</p>
                   <h3>Most Popular visitors :</h3>
                   {value.Interiors.map(interior=>{
                       return(
                           <Bounce left duration={3000}>
                             <div className="famous" key={interior.id}>
                       <h4>{interior.name}</h4>
                       <div className="famous-img">
                           <img src={interior.img} alt="img"/>
                       </div>

                             </div>
                           </Bounce>
                       )
                   })}
               </div>
           </div>
        </div>
    </section>
)
            }}
        </ProductConsumer>
    )
}
