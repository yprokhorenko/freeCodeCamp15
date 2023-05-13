import React from "react";
import Tour from "../Tour/Tour";
import "../../App";


const Tours = ({ tours }) => {
  return (
    <section>
      <div>
        <h1 className="ourToursTitle">Our Tours</h1>
      </div>
      <div className="toursContainer">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}/> 
        })} 
      </div>
    </section>
  );
};
export default Tours;
