import React from 'react';
import Title from '../Title';

export default function ContactForm() {
    return (
      <section className="contact-form">
          <div className="inside-container">
              <Title title="contact us" color="#e8f4dc" />
              <div className="contact-form-center">
            <form >
                <div className="form-inputs-texts">
                  <div className="inputs">
                      <p><label htmlFor="name">FULLNAME</label></p>
                      <input type="text" className="name" name="" id=""/>
                      
                      <p><label htmlFor="email">EMAIL</label></p>
                      <input type="email" className="email" name="" id=""/>
                </div> 

                <div className="form-texts">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, earum incidunt. Esse impedit magni accusamus consectetur libero odit, sint assumenda. Eveniet ea consectetur at debitis, nisi sint voluptatem aliquid molestias.</p>
                    <p>lorem ipsum</p>
								<p><i class="fas fa-map-marker-alt"></i> Road 45, off Muiz Banire, By Abraham Adesanya, Ajah, Lekki.</p>
								<p><i class="fas fa-phone-volume"></i> (+234)-7032623818</p>
								<p><i class="far fa-envelope-open"></i> info@cvillaresort.com</p>
                </div> 

                </div>
                <div className="form-area">
                    <p><label htmlFor="message">MESSAGE</label></p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="button" className="btnForm">MESSAGE</button>
            </form>
              </div>
          </div>
      </section>
    )
}
