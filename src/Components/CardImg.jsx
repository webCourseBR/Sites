import React from "react";
import "../style/css/CardImg.css";

import { Link } from "react-router-dom";

const CardImg = (props) => {
  const st = {
    background: `center url("${props.link}") no-repeat`,
    backgroundSize: `${props.size}px`,
  };
  return (
    <div className="cardImg" style={st}>
      <button className="cardImgButton">
        <Link to={`/${props.type}`}>{props.type}</Link>
      </button>
    </div>
  );
};

export default CardImg;
