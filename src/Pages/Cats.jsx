import React from "react";

import "../style/css/Cats.css";
import InfoCard3 from "../Components/InfoCard3";

const Cats = (props) => {
  return (
    <>
      <div className="catsContent">
        <h2 className="catsTitle">!!!CATS!!!</h2>

        <div className="catsContainer">
          <InfoCard3
            Img1="Assets/images/gato_sphynx.png"
            Img2="Assets/images/Cat01.png"
            Img3="Assets/images/gato_sphynx.png"
            Img4="Assets/images/Cat01.png"
            link="/donate"
          />
        </div>
      </div>
    </>
  );
};

export default Cats;
