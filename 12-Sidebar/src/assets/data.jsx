import React from "react";
import {
  RiHomeWifiLine,
  RiParentLine,
  RiBubbleChartLine,
  RiContactsBookLine,
  RiLayoutTop2Line,
} from "react-icons/ri";

import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/Fa";
export const links = [
  {
    id: 1,
    url: "/profile",
    text: "Home",
    icon: <RiHomeWifiLine />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <RiBubbleChartLine />,
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
    icon: <RiLayoutTop2Line />,
  },
  {
    id: 4,
    url: "/contacts",
    text: "Contacts",
    icon: <RiContactsBookLine />,
  },
  {
    id: 5,
    url: "/profile",
    text: "Profile",
    icon: <RiParentLine />,
  },
];

export const socials = [
  {
    id: 1,
    url: "#",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "#",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "#",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    url: "#",
    icon: <FaTwitter />,
  },
];
