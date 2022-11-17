import React from 'react';
import '../style/scss/Header.scss';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header shadow-sm">

			<div className="headerLeftDiv">
				<img className="headerLeftLogo" src="Assets/images/logo-header-cat.png" alt="logo da pagina"/>
				<h2 className='headerNameLogo'>Pets café</h2>
			</div>

			<div className="headerRightDiv">
				<button className='buttonAdoptMe'>ME ADOTE!</button>

				<Link to="/" className="headerLogoToHome">
					<img src="Assets/images/logo-header-house.png" alt="editar isso aqui"/>
				</Link>


			<Dropdown className="buttonDropdown">
				<Dropdown.Toggle id="dropdown-basic" className="buttonDropdownToggle">
					<img src="Assets/images/header-ex.png" alt="editar isso aqui"/>
				</Dropdown.Toggle>
				<Dropdown.Menu className="buttonDropdownMenu">
					<Dropdown.Item>
						<Link to="/"><p className="buttonDropdownP">HOME</p></Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/cats"><p className="buttonDropdownP">CATS</p></Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/dogs"><p className="buttonDropdownP">DOGS</p></Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/donates"><p className="buttonDropdownP">DONATES</p></Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>

	
			</div>
		</header>
	)
}

export default Header;
