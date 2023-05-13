import React from "react";
import preloader from "./preloader.svg";

const Loading = ({ props }) => {
  return (
    <div>
      <img src={preloader} style={{ width: "100px", height: "100px" }} />
    </div>
  );
};

export default Loading;
