import React from "react";
import "../style/css/Header.css";

import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header shadow-sm">
      <div className="headerLeftDiv">
        <Link to="/" className="headerLogoToHome">
          <img
            className="headerLeftLogo"
            src="Assets/images/logo-header-cat.png"
            alt="logo da pagina"
          />
        </Link>
        <h2 className="headerNameLogo">Pets café</h2>
      </div>

      <div className="headerRightDiv">
        <button className="buttonAdoptMe">ME ADOTE!</button>
        <div className="ContainerLogoTopHome">
          <Link to="/" className="headerLogoToHome">
            <img
              src="Assets/images/logo-header-house.png"
              alt="editar isso aqui"
            />
          </Link>
        </div>

        <Dropdown className="buttonDropdown">
          <Dropdown.Toggle id="dropdown-basic" className="buttonDropdownToggle">
            <img src="Assets/images/header-ex.png" alt="editar isso aqui" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="buttonDropdownMenu">
            <Dropdown.Item>
              <Link to="/" className="DropdownPlink">
                <p className="buttonDropdownP">HOME</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/Gatos" className="DropdownPlink">
                <p className="buttonDropdownP">GATOS</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/Cachorros" className="DropdownPlink">
                <p className="buttonDropdownP">CACHORROS</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/donate" className="DropdownPlink">
                <p className="buttonDropdownP">DOAÇÕES</p>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
