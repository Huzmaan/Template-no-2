import React from "react";
import beach from "../Images/beach3.jpg";

const Image = () => {
  return (
    <>
      <div className="MImg-css">
        <img className="Img-css" src={beach} alt="beach" />
        <h1 className="css">
          <b>
            4 Good Reasons
            <br />
            For travelling with us
          </b>
        </h1>
      </div>
    </>
  );
};

export default Image;
