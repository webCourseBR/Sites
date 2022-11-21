import React from "react";

import "../style/css/infoCard3.css";
import CatsToAdoption from "./CatsToAdoption.jsx";
// import { Link } from "react-router-dom";

const InfoCard3 = (props) => {
  return (
    <>
      <div className="Content">
        <CatsToAdoption srcImg={props.Img1} right={true} img={true} />
        <CatsToAdoption srcImg={props.Img2} right={false} img={false} />
        <CatsToAdoption srcImg={props.Img3} right={true} img={true} />
        <CatsToAdoption srcImg={props.Img4} right={false} img={false} />
      </div>
    </>
  );
};

export default InfoCard3;
