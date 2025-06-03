import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const servicePage = () => {
    navigate("/OurServices");
  };
  const contactPage = () => {
    navigate("/AboutUsSection");
  };
  const homePage = () => {
    navigate("/CustomerNeedSection");
  };

  return (
    <div>
      <nav className="nav-div">
        <div className="img-div">
          <img className="nav-pix" src="./images/logo web pix.png" />
        </div>
        <ul className="ul-div">
          <li onClick={homePage}>Home</li>
          <li>About</li>
          <li onClick={servicePage}>Services</li>
          <li onClick={contactPage}>Contact</li>
          <li>
            <button>202-555-0188</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
