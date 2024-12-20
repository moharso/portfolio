import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/my_character.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;
  const altText = `Avatar for the ${page} page`;

  return (
    <>
      <span className={spanClass} aria-hidden="true"></span>
      <img
        src={avatarImage}
        className={avatarClass}
        alt={altText}
        loading="lazy"
      />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
