import React from "react";
import { HiX } from "react-icons/hi";
import { links, socials } from "../src/assets/data";
import facebook1 from "../src/assets/facebook1.svg";

const Sidebar = () => {
  return (
  <aside className={"sidebar-overlay show-sidebar"}>
      <div className="sidebar-header">
        <div className="header-image">
          <img src={facebook1} alt="logo" />
        </div>
        <div className="sidebar-closing-btn">
          <HiX />
        </div>
      </div>

      <ul className="sidebar-nav">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="nav-single-link">
              <a href={url}>
                {icon}  {text}
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
