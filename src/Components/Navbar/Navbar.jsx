// Dependencies
import React, { useState } from "react";

// Stylesheet
import "./Navbar.css";

// Assest Import
import user_icon from "../../Asset/svg/user_icon.svg";
import twitter from "../../Asset/svg/twitter.svg";
import instagram from "../../Asset/svg/instagram.svg";

function Navbar() {
  const [isopen, setisopen] = useState(false);

  if (window.innerWidth > 638) {
    return (
      <nav id="desk_nav" className="desk_nav">
        <h1 className="logo">MNTN</h1>

        <ul className="links">
          <li>Equipments</li>
          <li>About Us</li>
          <li>Blog</li>
        </ul>

        <div className="user">
          <img src={user_icon} alt="user_icon" />
          <h3>Account</h3>
        </div>
      </nav>
    );
  } else {
    return (
      <nav id="mob_nav" className="mob_nav">
        <h1 className="logo">MNTN</h1>

        <div
          className="slider"
          style={
            isopen
              ? { clipPath: "circle(20rem )", backgroundColor: "#06161f" }
              : {
                  clipPath: "circle(1.4rem at 83% 1.5rem)",
                }
          }
        >
          <section
            className="burger"
            onClick={() => {
              setisopen(!isopen);
            }}
          >
            {/* Burger Icon */}
            <div
              style={
                isopen
                  ? { transform: "rotate(45deg) translateY(11px)" }
                  : { transform: "rotate(0)" }
              }
              className="line1"
            ></div>
            <div
              style={
                isopen
                  ? { transform: "scale(0) translate(0,50%)" }
                  : { transform: "scale(1) translate(0,-50%)" }
              }
              className="line2"
            ></div>
            <div
              style={
                isopen
                  ? { transform: "rotate(-45deg) translateY(-11px)" }
                  : { transform: "rotate(0)" }
              }
              className="line3"
            ></div>
          </section>

          <section className="user">
            {/* User Login Account and Icon */}
            <img src={user_icon} alt="user_icon" />
            <h3>Account</h3>
          </section>

          <ul className="links">
            {/* Navbar Titles */}
            <li>Equipments</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>

          <section className="social">
            <section>
              <div></div>
              <h3>Follow us</h3>
              <div></div>
            </section>
            <img className="insta" src={instagram} alt="instagram" />
            <img className="tweet" src={twitter} alt="instagram" />
          </section>
        </div>
      </nav>
    );
  }
}

export default Navbar;
