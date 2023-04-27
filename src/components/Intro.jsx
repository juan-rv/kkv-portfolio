import React, { useState } from "react";
import Plx from "react-plx";
import ScrollWrapper from "./ScrollWrapper";
import { motion } from "framer-motion";
import logo from "../assets/logo_big.png";
import "../styles/Intro.css";
import HeaderNav from "./NavBar";

const exampleParallaxData = [
  // {
  //   start: 0,
  //   end: "100vh",
  //   properties: [
  //     {
  //       startValue: 5,
  //       endValue: 0,
  //       property: "blur",
  //     },
  //   ],
  // },
];
const style = {
  width: "120vw",
  height: "300vh",
  background: "#89f202",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const H1 = motion.h1;

const Intro = () => {
  const [scrubPercent, setScrubPercent] = useState(0);
  const handleScrub = (value) => {
    setScrubPercent(value);
  };

  return (
    <div>
      <ScrollWrapper onScroll={(v) => handleScrub(v)}>
        <Plx parallaxData={exampleParallaxData} className="content_intro">
          <div className="content_text">
            <H1
              initial={{ opacity: 0 }}
              animate={{ opacity: scrubPercent >= 10 ? 1 : 0 }}
              className="welcome"
            >
              Welcome
            </H1>
            <H1
              initial={{ opacity: 0 }}
              animate={{ opacity: scrubPercent >= 20 ? 1 : 0 }}
              className="to"
            >
              To
            </H1>
            <motion.img
              className="logo_uno"
              initial={{ opacity: 0 }}
              animate={{ opacity: scrubPercent >= 30 ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={logo}
              alt="logo kkv"
            />
          </div>
        </Plx>
      </ScrollWrapper>
    </div>
  );
};

export default Intro;
