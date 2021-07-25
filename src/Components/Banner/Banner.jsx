// Dependencies
import React, { useState, useEffect } from "react";

// stylesheet
import "./Banner.css";

// Component
import Navbar from "../Navbar/Navbar";

// Asset
import downarrow from "../../Asset/svg/arrow_downward_24px.svg";
import instagram from "../../Asset/svg/instagram.svg";
import twitter from "../../Asset/svg/twitter.svg";

import img1 from "../../Asset/image/banner/10.jpg";
import img2 from "../../Asset/image/banner/2.jpg";
import img3 from "../../Asset/image/banner/3.jpg";
import img4 from "../../Asset/image/banner/4.jpg";
import img5 from "../../Asset/image/banner/5.jpg";

function Banner() {
  const [state, setstate] = useState(1);

  const tagline1 = `Be Prepared For The Mountains And Beyond!`;
  const tagline2 = `The Mountains Are Waiting For You`;
  const tagline3 = `So Pack Your Bags And Gear Up`;
  const tagline4 = `To Conquer The Mountains`;
  const tagline5 = `And Reach The Tippity Top Of The World`;

  useEffect(() => {
    let Interval1;
    const loop = () => {
      Interval1 = setInterval(() => {
        setstate((prev) => prev + 1);
      }, 5000);
      setTimeout(() => {
        clearInterval(Interval1);
      }, 20000);
    };

    loop();
    const Interval2 = setInterval(() => {
      setstate(1);
      loop();
    }, 25000);

    return () => {
      clearInterval(Interval1);
      clearInterval(Interval2);
    };
  }, []);

  if (window.innerWidth > 638) {
    return (
      <main id="desk_main" className="desk_main">
        <Navbar />
        <section className="desk_banner">
          <section className="desk_social">
            <h3>Follow Us</h3>
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </section>
          <section className="banner_body">
            <section>
              <div></div>
              <h3>A Hiking Guide</h3>
            </section>
            <h1>
              {state === 1
                ? tagline1
                : state === 2
                ? tagline2
                : state === 3
                ? tagline3
                : state === 4
                ? tagline4
                : state === 5
                ? tagline5
                : ""}
            </h1>
            <a href="#article">
              scroll down <img src={downarrow} alt="downarrow" />
            </a>
          </section>
          <section className="desk_slide">
            <div className="tags">
              <p>Start</p>
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
            </div>
            <div className="slide">
              <div
                id="slide1"
                style={
                  state === 1
                    ? { backgroundColor: "aqua" }
                    : { backgroundColor: "white" }
                }
              ></div>
              <div
                id="slide2"
                style={
                  state === 2
                    ? { backgroundColor: "aqua" }
                    : { backgroundColor: "white" }
                }
              ></div>
              <div
                id="slide3"
                style={
                  state === 3
                    ? { backgroundColor: "aqua" }
                    : { backgroundColor: "white" }
                }
              ></div>
              <div
                id="slide4"
                style={
                  state === 4
                    ? { backgroundColor: "aqua" }
                    : { backgroundColor: "white" }
                }
              ></div>
              <div
                id="slide5"
                style={
                  state === 5
                    ? { backgroundColor: "aqua" }
                    : { backgroundColor: "white" }
                }
              ></div>
            </div>
          </section>
        </section>
      </main>
    );
  } else {
    return (
      <main
        style={
          state === 1
            ? {
                backgroundImage: `url(${img1})`,
              }
            : state === 2
            ? { backgroundImage: `url(${img2})` }
            : state === 3
            ? { backgroundImage: `url(${img3})` }
            : state === 4
            ? { backgroundImage: `url(${img4})` }
            : state === 5
            ? { backgroundImage: `url(${img5})` }
            : {}
        }
        id="mob_main"
        className="mob_main"
      >
        <h1>
          <div></div>A Hiking Guide
        </h1>
        <h2>Be prepared for the moutains and beyond!</h2>
        <a href="#article">
          scroll down
          <img src={downarrow} alt="downarrow" />
        </a>

        <section>
          <div
            style={
              state === 1
                ? { backgroundColor: "aqua" }
                : { backgroundColor: "white" }
            }
            id="slide1"
          ></div>
          <div
            style={
              state === 2
                ? { backgroundColor: "aqua" }
                : { backgroundColor: "white" }
            }
            id="slide2"
          ></div>
          <div
            style={
              state === 3
                ? { backgroundColor: "aqua" }
                : { backgroundColor: "white" }
            }
            id="slide3"
          ></div>
          <div
            style={
              state === 4
                ? { backgroundColor: "aqua" }
                : { backgroundColor: "white" }
            }
            id="slide4"
          ></div>
          <div
            style={
              state === 5
                ? { backgroundColor: "aqua" }
                : { backgroundColor: "white" }
            }
            id="slide5"
          ></div>
        </section>
      </main>
    );
  }
}

export default Banner;
