import logo from "../src/assets/facebook.svg";
import { links } from "../src/data";
import { FaBars } from "react-icons/Fa";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Navbar = (props) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-header">
          <img src={logo} alt="logo" className="header-img" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              let { id, url, text } = link;
              return (
                <li className="single-link" key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="socials-container">
          <li className="social-icon">
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li className="social-icon">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="social-icon">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="social-icon">
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
