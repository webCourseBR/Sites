import React from 'react';

import '../style/scss/infoCard2.scss';

import CardImg from './CardImg.jsx';

const InfoCard2 = (props) => {
	return (
		<div className="infoCard2">
			<div classNameName="inforCardDescriptiondDiv">
				<p className="inforCardDescriptionDivP">
					{props.children}
				</p>
			</div>

			<CardImg type={props.type} link={props.img} size={props.size}/>
		</div>
	)
}

export default InfoCard2;
