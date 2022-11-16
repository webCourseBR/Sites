import React from 'react';

import '../style/scss/infoCard1.scss';

import CardImg from './CardImg.jsx';

const InfoCard1 = (props) => {
	return (
		<div className="infoCard1">
			<CardImg type={props.type} link={props.img} size={props.size}/>
			<p className="inforCardDescription">
				{props.children}
			</p>
		</div>
	)
}

export default InfoCard1;
