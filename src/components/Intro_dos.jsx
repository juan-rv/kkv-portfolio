import React, { useEffect, useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";

const Intro_dos = () => {
  const { scrollY } = useViewportScroll();
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const windowHeight = window.innerHeight;
    const boxTop = box.offsetTop;
    const boxHeight = box.offsetHeight;
    const boxBottom = boxTop + boxHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + windowHeight;
      if (scrollPosition > boxTop && scrollPosition < boxBottom) {
        const boxScroll = scrollPosition - boxTop;
        const boxProgress = boxScroll / boxHeight;
        box.style.opacity = boxProgress;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [boxRef]);

  return (
    <motion.div
      className="box"
      ref={boxRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Titulo de la caja</h2>
      <p>Contenido de la caja</p>
    </motion.div>
  );
};

export default Intro_dos;
