// Dependencies
import React, { useState, useEffect } from "react";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Article from "./Components/Article/Article";
import Footer from "./Components/Footer/Footer";

// Asset
import img1 from "./Asset/image/01.jpg";
import img2 from "./Asset/image/02.jpg";
import img3 from "./Asset/image/03.jpg";

// Style sheet
import "./App.css";

const infos = [
  {
    id: 1,
    number: "01",
    tagline: "GET STARTED",
    title: "What level of hiker are you?",
    para: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various website like ALL Trails and Modern Hiker. What type of hiker are you - novice, moderate,advanced,expert or expert backpacker?",
    img: img1,
  },
  {
    id: 2,
    number: "02",
    tagline: "HIKING ESSENTIALS",
    title: "Picking the right Hiking Gear!",
    para: "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and sticky as you get sweaty or wet.",
    img: img2,
  },
  {
    id: 3,
    number: "03",
    tagline: "WHERE YOU GO IS THE KEY",
    title: "Understand Your Map & Timing",
    para: "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, sudy the map, and have a good idea of what to expect. I like to know twhat my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..",
    img: img3,
  },
];

const Article_infos = infos.map((info) => {
  const { id, number, tagline, title, para, img } = info;

  return (
    <Article
      key={id}
      number={number}
      tagline={tagline}
      title={title}
      para={para}
      img={img}
    ></Article>
  );
});

function App() {
  const [BigScreen, setBigScreen] = useState("");

  const checkSize = () => {
    if (window.innerWidth > 638) {
      setBigScreen(true);
    } else {
      setBigScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [BigScreen]);

  // useEffect(() => {
  //   window.addEventListener("resize", checkSize);
  //   return () => {
  //     window.removeEventListener("resize", checkSize);
  //     console.log("bye");
  //   };
  // }, [BigScreen]);

  if (window.innerWidth > 638) {
    return (
      <>
        <Banner />
        {Article_infos}
        <br />
        <br />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Banner />
        {Article_infos}
        <br />
        <br />
        <Footer />
      </>
    );
  }
}

export default App;
