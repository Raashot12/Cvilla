import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import BkImage from '../../images/home.jpg';


export default function Header() {
	return (
		<HeroWrapper>
			<div className="inside-container">
				<div className="heroTexts">
					<Bounce left duration={3000}>
						<h1>Comfortable Rooms</h1>
					</Bounce>
					<Bounce right duration={3000}>
						<h1>Tastefully and Lavishly Furnished</h1>
					</Bounce>
				</div>
			</div>
		</HeroWrapper>
	)
}



const HeroWrapper = styled.header`
 min-height:60vh;
 background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${BkImage}) center/cover no-repeat;
 display:flex;
 align-items:center;
 margin-top:-90px;
 width:100%;
 overflow:hidden;
 justify-content:center;

 .heroTexts{
     min-height:inherit;
     margin:0 auto;
     display:flex;
     justify-content:center;
     flex-direction:column;
     align-items:center;
     text-align:center;
 }

 .heroTexts h1{
     font-size:18px;
     text-transform:uppercase;
     color:lightgray;
     background:rgba(58,65,71,0.8);
     margin:5px;
     padding:5px;
     font-weight:400;
 }


 @media screen and (min-width:880px){
   min-height:100vh;

   .heroTexts h1{
       font-size:30px;
   }
 }
 




`
