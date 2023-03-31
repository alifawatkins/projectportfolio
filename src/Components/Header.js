import React from "react";
import { Link } from "react-router-dom";


function Header(props) {
 
  return (
    <header className="nav">
      <div className="about">
        <Link to="/about">ABOUT</Link>
      </div>
      <div className="portfolio">
        <Link to="/portfolio">PORTFOLIO</Link>
      </div>

      <div className="contact">
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="weather">
        {props.weather.list && <p>The temperature in Hell is: {props.weather.list[0].main.temp}</p>}
      </div>
    </header>
  );
}

export default Header;
