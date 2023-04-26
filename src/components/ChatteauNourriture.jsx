import React, { useEffect, useRef, useState } from "react";
import Chatteau from "../styling/chatteauNourriture.module.css";
import laptop from "../images/laptop1.jpg";
import case1 from "../images/case1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { parentVariant } from "../animationVariants/chatteauNourritureVariants";
import { coverPage1Move } from "../animationVariants/chatteauNourritureVariants";
import { coverPage2Move } from "../animationVariants/chatteauNourritureVariants";
import { yoyoVariant } from "../animationVariants/chatteauNourritureVariants";
import { yoyoVariant2 } from "../animationVariants/chatteauNourritureVariants";
import { yoyoVariant3 } from "../animationVariants/chatteauNourritureVariants";
import { coverChatteauLogo } from "../animationVariants/chatteauNourritureVariants";
import { coverNextGenText } from "../animationVariants/chatteauNourritureVariants";
import foodPic from "../images/food1.jpg";
import logo from "../images/Chatteaulogo.png";

//Main Function

const ChatteauNourriture = () => {
  const roleRef = useRef(null);
  const contextRef = useRef(null);

  // const [ref1, ref2, ref3] = Array(3).fill(useRef(null));

  const [pageVisibility, setPageVisibility] = useState("hidden");

  setTimeout(() => {
    setPageVisibility("visible");
  }, 3000);

  // const [text, setText] = useState("HYPERPLEXED");

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
    }, 4500);

    window.scrollTo(0, 0);
  }, []);

  // changeText(numbersChange, period, periodRef);

  return (
    <motion.div
      initial="hidden"
      animate="move"
      // exit={{ scaleX: 0 }}
      className={Chatteau.container}
    >
      <motion.div
        className={Chatteau.coverPage}
        variants={coverPage1Move}
      ></motion.div>

      <motion.div className={Chatteau.coverPage2} variants={coverPage2Move}>
        <ul className={Chatteau.animateLi}>
          <motion.li variants={yoyoVariant}></motion.li>
          <motion.li variants={yoyoVariant2}></motion.li>
          <motion.li variants={yoyoVariant3}></motion.li>
        </ul>
      </motion.div>

      <section
        style={{
          visibility: pageVisibility,
          backgroundImage: `url(${foodPic})`,
          backgroundSize: "cover",
        }}
        className={Chatteau.sectionOne}
      >
        {/* <div className={Chatteau.menuBackground}></div> */}

        <ul
          className={Chatteau.navMenu}
          style={{ backgroundColor: "transparent" }}
        >
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/"
          >
            {" "}
            <li>Turn Back Home</li>
          </Link>
          <li>AllWorks </li>
          <li>Contact </li>
        </ul>

        <motion.div
          className={Chatteau.coverChatteauLogo}
          style={{
            position: "absolute",
            top: "27vh",
            width: "36.5vw",
            left: "33vw",
            height: "36vh",
            backgroundColor: "#00c6e2",
            zIndex: 1000,
          }}
          variants={coverChatteauLogo}
        ></motion.div>

        {/* <figure>
          <img className={Chatteau.laptop} src={laptop} width="700px" />

          <figcaption>
            <h1> Sip And Savor </h1>
            <h4> The next generation cocktail generator </h4>
          </figcaption>
        </figure> */}
        <img
          src={logo}
          style={{
            width: "500px",
            position: "absolute",
            top: "27vh",
            left: "33vw",
          }}
        ></img>

        <ul className={Chatteau.projectInfo}>
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

      <section className={Chatteau.sectionTwo}>
        <h1> CHATTEAU NOURRITURE</h1>

        <div>
          <p>
            <h3> Introduction </h3>
          </p>
          <p>
            <h5>
              Sip And Savor aims to be a easy to use software <br />
              Sip And Savor aims to be a easy to use software <br />
              Sip And Savor aims to be a easy to use software <br />
              Sip And Savor aims to be a easy to use software <br />
            </h5>
          </p>
        </div>
      </section>

      <section className={Chatteau.sectionThree}>
        <div className={Chatteau.analysisHeader}>
          <h3 style={{ cursor: "pointer", zIndex: "10" }}>
            {" "}
            Analysis & Preparations{" "}
          </h3>
          <h1> Branding </h1>
        </div>
        <div className={Chatteau.brandingInfo}>
          <div>
            <h1>
              Built with customers in <br /> mind , and love.
            </h1>
            <section className={Chatteau.horizontalLine}> </section>
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
            <img className={Chatteau.caseImage} src={case1} />
          </div>
        </div>
        <ul className={Chatteau.colorCodes}>
          <li>
            <span> Yellow </span>
          </li>
          <li>
            <span> Black </span>
          </li>
          <li>
            <span> White </span>
          </li>
          <li>
            <span> White </span>
          </li>
        </ul>

        <ul className={Chatteau.fontCode}>
          <li className={Chatteau.boldFont}>
            Bold
            <p>
              a b c d e f g h i j k l <br /> m n o p q r s t u v w x <br /> y z
              1 2 3 4 5 6 7 8 9
            </p>
          </li>
          <li className={Chatteau.regularFont}>
            {" "}
            Regular{" "}
            <p>
              a b c d e f g h i j k l <br /> m n o p q r s t u v w x <br /> y z
              1 2 3 4 5 6 7 8 9
            </p>{" "}
          </li>
        </ul>
      </section>

      <Link to="/caseStudy3.cryptoYard">
        <div className={Chatteau.nextWork}>
          {" "}
          <h4> NextWork </h4> <p> CRYPTO YARD </p>{" "}
        </div>
      </Link>
      <div className={Chatteau.footer}>
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
  );
};

export default ChatteauNourriture;
