import React, { useEffect, useRef, useState } from "react";
import sip from "../styling/sip&savor.module.css";
import laptop from "../images/laptop1.jpg";
import case1 from "../images/case1.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { parentVariant } from "../animationVariants/sipAndSavour-Variant";
import { coverPage1Move } from "../animationVariants/sipAndSavour-Variant";
import { coverPage2Move } from "../animationVariants/sipAndSavour-Variant";
import { yoyoVariant } from "../animationVariants/sipAndSavour-Variant";
import { yoyoVariant2 } from "../animationVariants/sipAndSavour-Variant";
import { yoyoVariant3 } from "../animationVariants/sipAndSavour-Variant";
import { coverSipText } from "../animationVariants/sipAndSavour-Variant";
import { coverNextGenText } from "../animationVariants/sipAndSavour-Variant";
import rightArrow from "../images/right-arrow.png";
import homePic from "../images/sipPic.jpg";
import LocomotiveScroll from "locomotive-scroll";
import Lenis from "@studio-freight/lenis";
import { useInView } from "react-intersection-observer";

// import {
//   LocomotiveScrollProvider,
//   // useLocomotiveScroll,
// } from "react-locomotive-scroll";

//Main Function

const SipAndSavor = () => {
  const roleRef = useRef(null);
  const contextRef = useRef(null);
  const scrollRef = useRef(null);
  const showRef = useRef(null);

  const { ref: colorHide, inView: colorInView } = useInView({
    threshold: 0.9,
    // delay: 1000,
    triggerOnce: true,
  });

  const { ref: caseRef, inView: caseInView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const { ref: fontRef, inView: fontInView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  // const [ref1, ref2, ref3] = Array(3).fill(useRef(null));

  const lenis = new Lenis({});

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [pageVisibility, setPageVisibility] = useState("hidden");

  //Parralax with framer motion
  // {
  //   target: scrollRef,
  //   offset: ["start end", "end end"],
  // }

  const { scrollYProgress } = useScroll();

  let y = useTransform(scrollYProgress, [0, 1], ["-10%", "250%"]);

  //

  setTimeout(() => {
    setPageVisibility("visible");
  }, 3000);

  let role = "Front-End Developer";
  let context = "Personal Project";
  let period = "2023";

  const letters11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChange = "01234567912345678901234567";

  const changeText = (lettersArray, textArray, reference) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chineseLetters = "其為矣而好作亂者君子務本";
    // const letters = "ABCDEFGHIJKLMN其為矣而好作亂者君子務本";

    let iterations = 0;

    const interval = setInterval(() => {
      reference.current.textContent = reference.current.textContent
        .split("")
        .map((letter, index) =>
          index < iterations
            ? textArray[index]
            : lettersArray[Math.floor(Math.random() * 26)]
        )
        .join("");

      if (iterations >= textArray.length) clearInterval(interval);

      iterations += 1 / 5;
    }, 60);
  };

  useEffect(() => {
    setTimeout(() => {
      changeText(letters11, role, roleRef);
      changeText(letters11, context, contextRef);
    }, 3500);
    window.scrollTo(0, 0);
  }, []);

  // changeText(numbersChange, period, periodRef);

  return (
    // <LocomotiveScrollProvider options={options} containerRef={containerRef}>
    <motion.div
      initial="hidden"
      animate="move"
      // exit={{ scaleX: 0 }}
      className={sip.container}
      ref={scrollRef}
    >
      <motion.div
        className={sip.coverPage}
        variants={coverPage1Move}
        // ref={scrollRef}
        //
        // -section
      ></motion.div>

      <motion.div className={sip.coverPage2} variants={coverPage2Move}>
        <ul className={sip.animateLi}>
          <motion.li variants={yoyoVariant}></motion.li>
          <motion.li variants={yoyoVariant2}></motion.li>
          <motion.li variants={yoyoVariant3}></motion.li>
        </ul>
      </motion.div>

      <section
        style={{
          visibility: pageVisibility,
          backgroundImage: `url(${homePic})`,
          backgroundSize: "contain",
        }}
        className={sip.sectionOne}
      >
        <div className={sip.menuBackground}></div>

        <ul className={sip.navMenu}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            {" "}
            <li>Turn Back Home</li>
          </Link>
          <li
            onClick={() => {
              lenis.scrollTo("#foot", {
                duration: 2.2,
                lerp: 0.1,
                lock: true,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            }}
          >
            AllWorks
          </li>
          <li>Contact</li>
        </ul>

        <motion.div
          className={sip.coverSipSavour}
          variants={coverSipText}
        ></motion.div>
        <motion.div
          variants={coverNextGenText}
          className={sip.coverNextGen}
        ></motion.div>
        {/* <figure style={{ visibility: "hidden" }}>
          <img className={sip.laptop} src={laptop} width="700px" />

          <figcaption>
            <h1> Sip And Savor </h1>
            <h4> The next generation cocktail generator </h4>
          </figcaption>
        </figure> */}

        <ul className={sip.projectInfo}>
          <li>
            <span style={{ cursor: "pointer", zIndex: "10" }}> Role: </span>{" "}
            <span
              ref={roleRef}
              value={role}
              style={{
                position: "absolute",
              }}
            >
              Front-End Developer
            </span>
          </li>
          <li>
            <span> Context:</span>{" "}
            <span
              ref={contextRef}
              value={context}
              style={{
                position: "absolute",
              }}
            >
              Personal Project
            </span>
          </li>
          <li>
            <span> Period:</span>
            <span> 2023 </span>
          </li>
        </ul>
      </section>

      <section className={sip.sectionTwo}>
        <h1> SIP AND SAVOUR </h1>

        <div>
          <p>
            <motion.h3 style={{ y }}>Introduction</motion.h3>
          </p>
          <motion.p>
            <h5>
              Sip And Savor aims to be a easy to use software <br />
              Sip And Savor aims to be a easy to use software <br />
              Sip And Savor aims to be a easy to use software <br />
              Sip And Savor aims to be a easy to use software <br />
            </h5>
          </motion.p>
          <button
            style={{
              backgroundColor: "#df6e04e8",
              fontSize: "1em",
              color: "white",
            }}
            className={sip.visitButton}
          >
            Visit Website
          </button>
          <img
            src={rightArrow}
            style={{
              width: "40px",
              position: "relative",
              bottom: "6.2vh",
              left: "9vw",
            }}
          />
        </div>
      </section>

      <section className={sip.sectionThree}>
        <div
          className={`${sip.analysisHeader}  ${
            headerInView ? sip.analysisHeaderAnimation : ""
          } `}
          ref={headerRef}
        >
          <h3 style={{ cursor: "pointer", zIndex: "10" }}>
            {" "}
            Analysis & Preparations{" "}
          </h3>
          <h1> Branding </h1>
        </div>

        <div className={sip.brandingInfo}>
          <div>
            <h1>
              Built with customers in <br /> mind , and love.
            </h1>
            <section className={sip.horizontalLine}> </section>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
          <div>
            <img
              ref={caseRef}
              className={`${sip.caseImage}  ${
                caseInView ? sip.caseImageAnimation : ""
              } `}
              src={case1}
            />
          </div>
        </div>

        <ul
          className={`${sip.colorCodes}  ${
            colorInView ? sip.colorCodesAnimation : ""
          } `}
          ref={colorHide}
        >
          <li>
            <span> Yellow </span>
          </li>
          <li>
            <span> Black </span>
          </li>
          <li>
            <span> White </span>
          </li>
        </ul>

        <ul
          className={`${sip.fontCode}  ${
            fontInView ? sip.fontCodeAnimation : ""
          } `}
          ref={fontRef}
        >
          <li className={sip.boldFont}>
            Bold
            <p>
              a b c d e f g h i j k l <br /> m n o p q r s t u v w x <br /> y z
              1 2 3 4 5 6 7 8 9
            </p>
          </li>
          <li className={sip.regularFont}>
            {" "}
            Regular{" "}
            <p>
              a b c d e f g h i j k l <br /> m n o p q r s t u v w x <br /> y z
              1 2 3 4 5 6 7 8 9{" "}
            </p>{" "}
          </li>
        </ul>
      </section>

      <Link to="/caseStudy2.chatteauNourriture">
        {" "}
        <div className={sip.nextWork}>
          {" "}
          <h4> NextWork </h4> <p> Chatteau Nourriture </p>{" "}
        </div>
      </Link>
      <div className={sip.footer} id="foot">
        <p> Michael Mensah Solomon </p>

        <ul>
          <li> Twitter </li>
          <li> LinkedIn </li>
          <li> Github </li>
          <li> Codepen </li>
        </ul>

        <p>
          {" "}
          @2023 Michael Mensah-Solomon Tel: +233503439290 Email:
          ekmensolomon@gmail.com{" "}
        </p>
      </div>
    </motion.div>
    // </LocomotiveScrollProvider>
  );
};

export default SipAndSavor;
