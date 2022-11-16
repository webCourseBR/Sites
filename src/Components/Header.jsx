import React from 'react';
import '../style/scss/Header.scss';

// TODO:
// - EDITAR CSS
// - EXPANDIR UL BOTAO

const Header = () => {
	return (
		<header className="header">

			<div className="headerLeftDiv">
				<img className="headerLeftLogo" src="Assets/images/logo-header-cat.png" alt="logo da pagina"/>
				<h2 className='headerNameLogo'>Pets café</h2>
			</div>

			<div className="headerRightDiv">
				<button className='buttonAdoptMe'>ME ADOTE!</button>

				<a href="...">
					<img src="Assets/images/logo-header-house.png" alt="editar isso aqui"/>
				</a>

				<a href="...">
					<img src="Assets/images/header-ex.png" alt="editar isso aqui"/>
				</a>
			</div>
		</header>
	)
}

export default Header;
