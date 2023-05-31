import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { AppContext } from "../context";

const Home = () => {
  const { openSidebar, openModal } = useContext(AppContext);
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle" > <MdMenu /> </button>
      <button onClick={openModal}   className="btn" > Show Modal </button>
    </main>
  );
};

export default Home;
