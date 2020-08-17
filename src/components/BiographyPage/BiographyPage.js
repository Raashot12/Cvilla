import React from 'react';
import Title from '../Title';
import BackPerson from '../../images/man.png';
import Bounce from 'react-reveal/Bounce';
import './biographyPage.css';




export default function BiographyPage() {
    return (
        <section className="biography">
            <div className="inside-container">
                <h4>MEET THE RESORT MANAGER</h4>
                <h1>Mr Temitayo Adegoke</h1>
                {/* <div className="biography-links">
                 <li>
                    <a href="/">
                     <p className="p1">HOMEPAGE</p>
                     <p>BIOGRAPHY</p>
                    </a>
                        
                </li>

                <li>
                    <a href="/">
                     <p className="p1">PORTFOLIO</p>
                     <p>MY ART WORDS</p>
                    </a>
                        
                </li>

                <li>
                    <a href="/">
                     <p className="p1">HOMEPAGE</p>
                     <p>BE IN TOUCH</p>
                    </a>
                        
                </li>

                
                <li>
                    <a href="/">
                     <p ><i className="fas fa-search"></i></p>
                   
                    </a>
                        
                </li>
                </div> */}
                <div className="person">
                    <Bounce top duration={3000}>
                    <div className="personImg">
                        <img src={BackPerson} alt="img"/>
                    </div>
                    </Bounce>
                   
                    <div className="person-texts">
                        <Title title="Mr Temitayo Adegoke" color="#fff" />
                        <Bounce right duration={2000} cascade>
							<p>A business professional with experience in web development, visual design, mobile apps development and IT training currently leading a team of passionate professions in the listed skillsets to create valuable products with engineering happiness as the end game.
								Appreciates creativity, have an indomitable drive for succ-ess and likes impacting lives. A highly self-motivated and enthusiastic person with a genuine interest in Information Technology, Business, Entrepreneurship, Social Work and Health always totally committed to whatever thing he is involved with, open to new ideas and knowledge and also a very positive individual who strongly believes in going the extra mile in order to achieve extraordinary feats. </p>
                        </Bounce>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
