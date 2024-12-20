import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

const NAV_ITEMS = [
  { path: "/", label: "ABOUT", icon: astronautHelmet, className: "nav-about" },
  { path: "/skills", label: "SKILLS", icon: deadEye, className: "nav-skills" },
  { path: "/projects", label: "PROJECTS", icon: stack, className: "nav-projects" },
  { path: "/contact", label: "CONTACT", icon: envelope, className: "nav-contact" },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className={`nav ${NAV_ITEMS.find(item => item.path === location.pathname)?.className || ""}`}>
      {NAV_ITEMS.map(({ path, label, icon, className }) => {
        const isCurrent = location.pathname === path;
        return (
          <Link 
            key={path} 
            to={path} 
            className={`nav-link ${isCurrent ? "current" : ""}`}
            aria-label={label}
          >
            <img src={icon} alt={`${label.toLowerCase()} icon`} />
            {isCurrent && <h1 className="page-title">{label}</h1>}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
