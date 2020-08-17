import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';


export default function Footer() {
    return (
      <ProductConsumer>
          {value=>{
              return(
                <footer>
                <ul>

                    {
                        value.links.map(links=>{
                            return(
                            <li key={links.id}><Link to={links.path}>{links.link}</Link></li> 
                            )
                        })
                    }
                    {/* <li><Link to="/">HOME</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/biography">BIOGRAPHY</Link></li>
                    <li><Link to="/interiors">INTERIORS</Link></li>
                    <li><Link to="/events">EVENTS</Link></li>
                    <li><Link to="/contacts">CONTACT</Link></li>
                    <li><Link to="/inpirations">INSPIRATIONS</Link></li>
                     */}
                </ul>
            </footer>
              )
          }}
      </ProductConsumer>
    )
}
