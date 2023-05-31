import React, { useContext } from "react";
import { HiX } from "react-icons/hi";
import { links, socials } from "../src/assets/data";
import   facebook1 from "../src/assets/facebook1.svg";
import { AppContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  return (
    <aside
    className={`${isSidebarOpen ? 'sidebar-overlay show-sidebar' : 'sidebar-overlay'}`}>
      <div className="sidebar-header">
        <div className="header-image">
          <img src={facebook1} alt="logo" />
        </div>
        <div onClick={closeSidebar} className="sidebar-closing-btn">
          <HiX />
        </div>
      </div>

      <ul className="sidebar-nav">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="nav-single-link">
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="sidebar-socials">
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id} className="single-social">
              <a href={url}> {icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
