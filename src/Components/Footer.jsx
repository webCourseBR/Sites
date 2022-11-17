import React from 'react';
import '../style/scss/Footer.scss';

// TODO: EXPANDIR
// [sobre] - [contato] - [licença] -

const Footer = () => {
	return (
		<footer className="footer shadow-sm">
		
			<ul className="footerUl">
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/license">License</a></li>
			</ul>

		</footer>
	)
}

export default Footer;
