import React from "react";
import { Link } from "react-router-dom";

import "../style/css/CatsToAdoption.css";

const CatsToAdoption = (props) => {
  return (
    <>
      <div className={props.right ? "ContainerRight" : "ContainerLeft"}>
        <div className="imgText">
          <img src={props.srcImg} alt="Animal para Adoção"></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ullam
            in numquam ad accusamus, voluptas magnam. Et laborum consectetur
            placeat error molestiae, expedita ipsum aperiam repellat, distinctio
            quis cum amet.
          </p>
        </div>

        <div className="divButton">
          <button className="ButtonAdoptMe">
            <Link to={props.link}>ME ADOTE!</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CatsToAdoption;
