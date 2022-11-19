import React from 'react';
import '../style/scss/Footer.scss';

// TODO: EXPANDIR
// [sobre] - [contato] - [licença] -

const Footer = () => {
	return (
		<footer className="footer shadow-sm">
		
			<ul className="footerUl">
				<li><a href="/about">SOBRE</a></li>
				<li><a href="/contact">CONTATO</a></li>
				<li><a href="/license">LICENÇA</a></li>
			</ul>

		</footer>
	)
}

export default Footer;
