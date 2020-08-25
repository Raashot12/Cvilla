import React from 'react';
import styled from 'styled-components';
import Roll from 'react-reveal/Roll';

export default function Title(props) {
	return (
		<TitleWrapper className="title" >
			<Roll>
				<h2 className="h2Title">{props.title}</h2>
				<div className="underline"></div>
			</Roll>
		</TitleWrapper>
	)
}



// style = {{ color: props.color }}


const TitleWrapper = styled.div`
 margin-bottom:10px;
 .h2Title{
     font-weight:400;
	 text-transform:uppercase;
	 color: red;
 }

 .underline{
     width:60px;
     border: gold 1px solid;
 }



`
