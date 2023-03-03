import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignJustify, FaTimes } from "react-icons/fa";


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
 


  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

 

  return (
    <nav>
      <div className="logo">
        <img
          src="https://photos.fliarbi.com/5dfdb0bfd1b18-logo.png"
          alt="logo"
        />
      </div>
      <ul className={toggleMenu ? "nav-links mobile" : "nav-links"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Log in</a>
        </li>
        <li>
          <a href="/">Signup</a>
        </li>
       
   
       
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        {toggleMenu ? <FaTimes /> : <FaAlignJustify />}
      </div>
    </nav>
  );
}

export default Navbar;
