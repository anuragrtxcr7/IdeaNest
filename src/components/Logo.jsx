import React from "react";
import logo from "../../public/images/favicon.png";
const Logo = ({ width = "100px", invert = true, className }) => {
  return (
    <img
      className={`${invert && "invert"} ${className} `}
      src={logo}
      width={width}
      alt="Logo"
    />
  );
};

export default Logo;
