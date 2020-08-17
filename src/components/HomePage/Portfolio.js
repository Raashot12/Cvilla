import React from 'react';
import Title from '../Title';
import {ProductConsumer} from '../Context/Context';

export default function Portfolio() {
    return (
      <ProductConsumer>
          {value=>{
              const {portfolio}=value;
              return(
        <section className="portfolio">
        <div className="inside-container">
            <Title title="Gallery" color="#323232" />
    <div className="portfolio-center">
        {portfolio.map(portfolio=>{
            return(
                <div className="single-portfolio" key={portfolio.id} style={{backgroundImage:`url(${portfolio.img})`}}>
                    <div className="plus">
                        <i className={portfolio.plus}></i>
                    </div>
                    
                </div>
            )
        })}
    </div>
        </div>
        </section>
              )
          }}
      </ProductConsumer>
    )
}
