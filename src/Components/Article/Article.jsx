// Dependencies
import React, { useState, useEffect } from "react";

// asset
import rightarrow from "../../Asset/svg/arrow_right_24px.svg";

// Style sheet
import "./Article.css";

function Articles(props) {
  const { number, tagline, title, para, img } = props;

  let even, slideImgRef;

  if (number % 2 === 0) {
    even = true;
  } else {
    even = false;
  }

  const [BigScreen, setBigScreen] = useState("");

  const checkSize = () => {
    if (window.innerWidth > 638) {
      setBigScreen(true);
    } else {
      setBigScreen(false);
    }
  };

  useEffect(() => {
    if (window.pageYOffset > number * 350) {
      slideImgRef.current.style.opacity = 1;
      slideImgRef.current.style.transform = "translateX(0)";
      slideImgRef.current.style.transition = "none";
    }

    const slideImg = () => {
      if (window.pageYOffset > number * 350) {
        slideImgRef.current.style.opacity = 1;
        slideImgRef.current.style.transform = "translateX(0)";
        slideImgRef.current.style.transition =
          "all 1.5s cubic-bezier(0.61, -0.5, 0.42, 1.74)";
      }
    };

    window.addEventListener("scroll", slideImg);
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("scroll", slideImg);
      window.removeEventListener("resize", checkSize);
    };
  }, [slideImgRef, number, BigScreen]);

  if (window.innerWidth > 638) {
    slideImgRef = React.createRef();
    return (
      <section id="desk_article" className="desk_article">
        <article id="article">
          <figure
            className="desk_figure"
            ref={slideImgRef}
            style={
              even
                ? { transform: "translateX(40vw)", opacity: "0" }
                : {
                    transform: "translateX(-40vw)",
                    opacity: "0",
                  }
            }
          >
            <img src={img} alt="" />
          </figure>
          <main style={even ? {} : {}}>
            <section>
              <h2>{number}</h2>
              <div></div>
              <h3>{tagline}</h3>
            </section>
            <h1>{title}</h1>
            <p>{para}</p>
            <br />
            <a href={`#more${number}`} id={`more${number}`}>
              read more <img src={rightarrow} alt="rightarrow" />
            </a>
          </main>
        </article>
      </section>
    );
  } else {
    slideImgRef = React.createRef();

    return (
      <section id="mob_article" className="mob_article">
        <article id="article">
          <section>
            <h1 style={even ? { right: "20vw" } : { left: "21vw" }}>
              {number}
            </h1>
            <div
              style={
                even
                  ? { left: "55vw", right: "1vw" }
                  : { left: "1vw", right: "55vw" }
              }
            ></div>
            <h2
              style={
                even
                  ? { left: "60vw", right: "6vw" }
                  : { left: "6vw", right: "55vw" }
              }
            >
              {tagline}
            </h2>
            <figure
              className="mob_figure"
              ref={slideImgRef}
              style={
                even
                  ? { left: "3vw", transform: "translateX(40vw)", opacity: "0" }
                  : {
                      right: "3vw",
                      transform: "translateX(-40vw)",
                      opacity: "0",
                    }
              }
            >
              <img src={img} alt={`img ${number}`} />
            </figure>
          </section>
          <h3>{title}</h3>
          <p>{para}</p>
          <br />
          <a href={`#more${number}`} id={`more${number}`}>
            read more <img src={rightarrow} alt="rightarrow" />
          </a>
        </article>
      </section>
    );
  }
}

export default Articles;
