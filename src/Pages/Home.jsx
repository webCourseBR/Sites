import React from 'react';

import InfoCard1 from '../Components/InfoCard1';
import InfoCard2 from '../Components/InfoCard2';

const Home = () => {
	return (
		<div className="Home">

			<InfoCard1 type="cats" img="https://m.media-amazon.com/images/I/71+mDoHG4mL.png" size={150}>
				enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
				amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
			</InfoCard1>

			<div className="HomeP">
				enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
				amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
			</div>

		<InfoCard2 type="dogs" img="Assets/images/test-dog01.png" size={170}>
				enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
				amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
		</InfoCard2>

		</div>
	)
}

export default Home;
