import React from 'react';
import '../style/scss/Footer.scss';

// TODO: EXPANDIR
// [sobre] - [contato] - [licença] -

const Footer = () => {
	return (
		<footer className="footer">
		
			<ul className="footerUl">
				<li><a href="/sobre">Sobre</a></li>
				<li><a href="/contato">Contato</a></li>
				<li><a href="/licenca">Licença</a></li>
			</ul>

		</footer>
	)
}

export default Footer;
