import React from "react";
import "../style/css/License.css";

const License = () => {
  return (
    <div className="LicenseContainer">
      <div className="LicenseContent">
        <div className="LicenseTitle">
          <div className="FtVerific">
            <img
              className="Verificado"
              src="Assets/images/verificado.jpg"
              alt="Verificado Titulo"
            />

            <h1 className="Title">License</h1>
          </div>
        </div>

        <img
          className="Documento"
          src="Assets/images/documento.png"
          alt="Icone Documento"
        />

        <div className="LoremLicense">
          « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrum exercitationem ullam »
        </div>
      </div>

      <div className="Button">
        <button className="ButtonLicense">
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.html"
            className="TxtLicense"
          >
            SAIBA MAIS
          </a>
        </button>
      </div>
    </div>
  );
};
export default License;
