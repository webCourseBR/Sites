import React from "react";
import { Link } from "react-router-dom";

import "../style/css/CatsToAdoption.css";

const CatsToAdoption = (props) => {
  return (
    <>
      <div className={props.right ? "ContainerRight" : "ContainerLeft"}>
        <div className={props.img ? "imgTextRight" : "imgTextLeft"}>
          <img
            src={props.srcImg}
            alt="Animal para Adoção"
            className="CatsImg"
          ></img>
          <div className="Catstxt">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ullam
              in numquam ad accusamus, voluptas magnam. Et laborum consectetur
              placeat error molestiae, expedita ipsum aperiam repellat,
              distinctio quis cum amet.
            </p>
          </div>
        </div>

        <div className="divButton">
          <Link to={props.link}>ME ADOTE!</Link>
        </div>
      </div>
    </>
  );
};

export default CatsToAdoption;
