import React, { useState, useEffect, useRef } from "react";
import { useTransform, useViewportScroll } from "framer-motion";

const ScrollWrapper = ({ children, onScroll }) => {
  const ref = useRef();
  const [offSetHeight, setOffSetHeight] = useState(0);
  const [elHeight, setElHeight] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const yPercentage = useTransform(
    scrollY,
    [offSetHeight, offSetHeight + elHeight],
    [0, 100]
  );

  useEffect(() => {
    if (ref && ref.current) {
      setOffSetHeight(ref.current.getBoundingClientRect().top);
      setElHeight(ref.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    yPercentage.onChange((v) => onScroll(v));
  }, [yPercentage]);

  return <div ref={ref}> {children}</div>;
};

export default ScrollWrapper;
