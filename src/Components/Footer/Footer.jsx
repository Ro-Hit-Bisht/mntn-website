import React, { useState } from "react";

import "./Footer.css";

function Footer() {
  const [OpenOne, setOpenOne] = useState(false);
  const [OpenTwo, setOpenTwo] = useState(false);

  const liStyle1 = { height: "0", opacity: "0" };
  const liStyle2 = { height: "4.5vh", opacity: "1" };

  if (window.innerWidth > 638) {
    return (
      <footer id="desk_footer" className="desk_footer">
        <section className="first section">
          <h1>MNTN</h1>
          <p className="para f">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="para s">copyright 2019 MNTN, Inc. Terms & Privacy.</p>
        </section>
        <section className="second section">
          <h2>More on the Blog</h2>
          <ul>
            <li>About MNTN</li>
            <li>Contributors & Writers</li>
            <li>Write For Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
        <section className="third section">
          <h2>More on MNTN</h2>
          <ul>
            <li>The Team</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </section>
      </footer>
    );
  } else {
    return (
      <footer id="mob_footer" className="mob_footer">
        <section className="first section">
          <h2>
            More on MNTN{" "}
            <button
              onClick={() => {
                setOpenOne(!OpenOne);
              }}
              style={
                OpenOne
                  ? { transform: "rotate(-135deg)" }
                  : { transform: "rotate(45deg)" }
              }
            ></button>
          </h2>
          <hr />
          <ul style={OpenOne ? { height: "13.5vh" } : { height: "0" }}>
            <li style={OpenOne ? liStyle2 : liStyle1}>The Team</li>
            <li style={OpenOne ? liStyle2 : liStyle1}>Jobs</li>
            <li style={OpenOne ? liStyle2 : liStyle1}>Press</li>
          </ul>
        </section>
        <br />
        <br />
        <section className="second section">
          <h2>
            More on the Blog{" "}
            <button
              onClick={() => {
                setOpenTwo(!OpenTwo);
              }}
              style={
                OpenTwo
                  ? { transform: "rotate(-135deg)" }
                  : { transform: "rotate(45deg)" }
              }
            ></button>
          </h2>
          <hr />
          <ul style={OpenTwo ? { height: "22.5vh" } : { height: "0" }}>
            <li style={OpenTwo ? liStyle2 : liStyle1}>About MNTN</li>
            <li style={OpenTwo ? liStyle2 : liStyle1}>
              Contributors & Writers
            </li>
            <li style={OpenTwo ? liStyle2 : liStyle1}>Write For Us</li>
            <li style={OpenTwo ? liStyle2 : liStyle1}>Contact Us</li>
            <li style={OpenTwo ? liStyle2 : liStyle1}>Privacy Policy</li>
          </ul>
        </section>
        <br />
        <br />
        <section className="third section">
          <h1>MNTN</h1>
          <hr />
          <p className="para f">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="para s">copyright 2019 MNTN, Inc. Terms & Privacy.</p>
        </section>
        <br />
        <br />
        <br />
        <br />
      </footer>
    );
  }
}

export default Footer;
