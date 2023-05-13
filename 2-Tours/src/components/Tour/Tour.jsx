import React from "react";
import "../../App";

const Tour = ({ id, image, info, name, price }) => {
  return (
    <div className="singleTour">
      <img src={image} alt={name} className="tourImg" />
    </div>
  );
};

export default Tour;
