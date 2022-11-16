import React from 'react';

import InfoCard1 from '../Components/InfoCard1';
import InfoCard2 from '../Components/InfoCard2';

import '../style/css/Home.css';

const Home = () => {
	return (
		<div className="Home">

			<InfoCard1 type="cats" img="Assets/images/Cat01.png" size={350}>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			</InfoCard1>

			<div className="HomeP">
				enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
				amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
			</div>

		<InfoCard2 type="dogs" img="Assets/images/test-dog01.png" size={350}>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis odio illo maxime quae. Inventore repellendus, dolorem sint voluptas explicabo recusandae vero. In quam perspiciatis eaque architecto voluptate optio sed.
		</InfoCard2>

		</div>
	)
}

export default Home;
