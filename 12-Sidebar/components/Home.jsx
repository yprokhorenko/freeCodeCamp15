import React from "react";
import { MdMenu } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <button className="modal-btn">
        <MdMenu />
      </button>
      <button className="sidebar-btn">Show Modal</button>
    </div>
  );
};

export default Home;
