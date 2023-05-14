import React, { useState } from "react";
import "../../App";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="singleTour">
      <img src={image} alt={name} className="tourImg" />
      <div className="tour-footer">
        <div className="tour-info">
          <h4 className="tour-name">{name}</h4>
          <h4 className="tour-price">₴ {price}</h4>
        </div>
        <p className="tour-description">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "readMore"}
          </button>
        </p>
        <button className="tour-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
