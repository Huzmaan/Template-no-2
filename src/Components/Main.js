import React from "react";
import MobileImg from "../Images/cellphone.jpg";
import nowornever from "../Images/nowornever.jpg";
import sealions from "../Images/sealions.jpg";
import truck from "../Images/truck.jpg";

const Main = () => {
  return (
    <div className="Main-card">
      <div className="first-div">
        <div className="Card-css">
          <img className="Main-css" src={MobileImg} alt="MobileImg" />
          <div className="Container-css">
            <h1 className="">Smart Vacation</h1>
            <p>Full vacation control from your cell phone.</p>
          </div>
        </div>
        <div className="Card-css">
          <img className="Main-css" src={sealions} alt="sealions" />
          <div className="Container-css">
            <h1 className="">Super Offers</h1>
            <p>Up to 50% offers. Always 25% student offers.</p>
          </div>
        </div>
      </div>
      <div className="second-div">
        <div className="Card-css">
          <img className="Main-css" src={truck} alt="truck" />
          <div className="Container-css">
            <h1 className="">Car Rental Included</h1>
            <p>Wherever you travel our car rental is included.</p>
          </div>
        </div>
        <div className="Card-css">
          <img className="Main-css" src={nowornever} alt="nowornever" />
          <div className="Container-css">
            <h1 className="">Realize Your Dreams</h1>
            <p>Don't wait until it is to late.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
