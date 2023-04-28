import React, { useEffect, useRef } from "react";
import home from "../styling/home.module.css";
import codepen from "../images/codepen.png";
import contrast from "../images/contrast.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import nameLogo from "../images/name.svg";
import case1 from "../images/case1.png";
import case2 from "../images/case2.png";
import one from "../images/number-1.png";
import two from "../images/number-2.png";
import three from "../images/number-3.png";
import { motion } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

// import one from "../images/1.png";
// import anime from "animejs";

const Home = () => {
  const refer = useRef(null);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className={home.container}
      initial={{ boxShadow: " 0 0 0 0 red" }}
      animate={{
        boxShadow: " 100vw 100vw 100vw 0 rgba(0, 0, 0, 0.664)",
      }}
      exit={{ boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.664)" }}
      transition={{ duration: 0.5 }}
    >
      <section className={home.sectionOne}>
        <ul className={home.navItems}>
          <Link
            to="/caseStudy1.sip&Savour"
            style={{ textDecoration: "none", color: "#6c6c75" }}
          >
            {" "}
            <li> Case Studies </li>{" "}
          </Link>
          <li> Contact </li>
          <li>
            <img src={contrast} alt="contrast" />
          </li>
        </ul>

        <div className={home.introName}>
          <h1>
            <TypeWriterEffect
              textStyle={{ fontFamily: "Red Hat Display", fontSize: "0.9em" }}
              startDelay={50}
              cursorColor="black"
              text=" Michael Mensah-Solomon"
              typeSpeed={100}
              // scrollArea={myAppRef}
            ></TypeWriterEffect>
          </h1>
          <h4>
            <TypeWriterEffect
              textStyle={{ fontFamily: "Red Hat Display", fontSize: "0.9em" }}
              startDelay={3000}
              cursorColor="black"
              // text="Interactive front-end developer"
              multiText={[
                "Game Deve... oops ",
                "Interactive front-end developer",
              ]}
              typeSpeed={50}
              // scrollArea={myAppRef}
            ></TypeWriterEffect>
          </h4>
        </div>

        <button type="button"> About Me </button>
        {/* 
        <img src={nameLogo} className={home.nameLogo} /> */}

        <ul className={home.socials}>
          <li>
            <img src={github} />
          </li>
          <li>
            <img src={linkedin} />
          </li>
          <li>
            <img src={codepen} />
          </li>
          <li>
            <img src={twitter} />
          </li>
        </ul>
      </section>

      <div className={home.sectionOneAndHalf}>
        <ul className={home.infoHeader}>
          <li>
            <h4> ABOUT </h4>
          </li>
          <li>
            <h1> Personal Info </h1>
          </li>
          <li>
            <h5> Get to know more about me </h5>
          </li>
        </ul>

        <div className={home.infoContent}>
          <div className={home.helloText}>
            <h3> Hello! </h3>
            <p>
              I am a Michael Mensah-Solomon a passionate Frontend Web <br />
              using web technologies to build amazing products and <br />
              focusing on solving problems for different niches and different
              <br /> industries using the power of technology.
            </p>

            <p>
              I will love to hear from you. Wherther it's a project
              collaboration, <br />
              job opportunity or just a chat. Feel free to contact me.
            </p>
          </div>
          <div className={home.skills}>
            Skills
            <ul className={home.wrapButtons}>
              <li>
                <button>HTML</button>
              </li>
              <li>
                <button>CSS</button>
              </li>
              <li>
                <button>JAVASCRIPT</button>
              </li>
              <li>
                <button>TYPESCRIPT</button>
              </li>
              <li>
                <button>SASS</button>
              </li>
              <li>
                <button>REACT</button>
              </li>
              <li>
                <button>REDUX</button>
              </li>
              <li>
                <button>GIT</button>
              </li>
              <li>
                <button>TAILWIND CSS</button>
              </li>
              <li>
                <button>BOOTSTRAP</button>
              </li>
              <li>
                <button>GITHUB</button>
              </li>
              <li>
                <button>CODEPEN</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={home.sectionTwo}>
        <div className={home.sectionTwoHeader}>
          <h3> Case Studies </h3>
          <h1> Latest Works </h1>
        </div>

        <ul className={home.casesList}>
          <Link
            to="/caseStudy1.sip&Savour"
            // onClick={() => {
            //   window.scrollTo(0, 0);
            // }}
          >
            {" "}
            <li>
              <div
                style={{
                  backgroundImage: `url(${case1})`,
                }}
                className={`${home.caseStudyTwo} ${home.buttonHover} `}
              >
                <div className={home.event}>
                  <img src={one} />
                  {/* <img src={one} /> */}
                </div>
                {/* <h1> Cocktail Generator </h1> */}
                {/* <h6>
            Sip Savor Repeat , a web app for generating <br /> cocktails with
            you selected ingredients
          </h6> */}
                <button>Case Study</button>
              </div>
            </li>
          </Link>

          <li>
            <div
              style={{ backgroundImage: `url(${case2})` }}
              className={`${home.caseStudyTwo} ${home.buttonHover} `}
            >
              <div className={home.event}>
                <img src={two} />
                {/* <img src={one} /> */}
              </div>
              {/* <h1> Cocktail Generator </h1> */}
              {/* <h6>
            Sip Savor Repeat , a web app for generating <br /> cocktails with
            you selected ingredients
          </h6> */}
              <button>Case Study</button>
            </div>
          </li>

          <li>
            <div
              style={{ backgroundImage: `url(${case2})` }}
              className={`${home.caseStudyTwo} ${home.buttonHover} `}
            >
              <button>Case </button>

              <div className={home.event}>
                <img src={three} />
                {/* <img src={one} /> */}
              </div>
            </div>
          </li>

          <li>
            <div
              style={{ backgroundImage: `url(${case2})` }}
              className={`${home.caseStudyTwo} ${home.buttonHover} `}
            >
              <button>Case </button>

              <div className={home.event}>
                <img src={three} />
                {/* <img src={one} /> */}
              </div>
            </div>
          </li>

          {/* <li className={home.svgEl}>
            <svg width="10000" height="700" className={home.svgPlace}>
              <path
                className={home.path}
                fill="none"
                stroke="red"
                strokeWidth="3"
                ref={refer}
                d="M668.42,531h35.417l-17.5-280.837H640.086L590.086,386c-12.5,35.417-22.5,66.251-29.584,94.585h-1.25c-7.083-29.167-16.667-60-28.334-94.585L483,250.163h-46.25L417.167,531h34.584l7.5-120.418c2.5-42.084,4.583-89.168,5.417-124.168H465.5C473.418,319.747,484.668,356,498,395.582l45.418,133.751h27.5L620.5,393.082c14.167-38.751,25.833-73.751,35.417-106.668h1.25c-0.417,35,2.083,82.084,4.167,121.251Zm91.247-280.837V531h36.25V250.163h-36.25ZM1048,493.083c-14.58,7.083-37.08,11.667-59.165,11.667-68.334,0-107.918-44.168-107.918-112.918C880.917,318.081,924.668,276,990.5,276c23.338,0,42.918,5,56.668,11.667l8.75-29.584c-9.58-5-31.67-12.5-66.668-12.5-87.084,0-146.669,59.584-146.669,147.5,0,92.084,59.585,142.085,138.752,142.085,34.165,0,60.835-6.667,74.165-13.334Zm52.92-242.92V531h36.25V399.332H1273V531h36.67V250.163H1273v117.5H1137.17v-117.5h-36.25Zm416.67,192.5,30,88.334h38.75L1490.5,250.163h-43.75L1351.33,531h37.5L1418,442.666h99.59Zm-92.09-28.334,27.5-81.251c5.42-17.084,10-34.167,14.17-50.834H1468c4.17,16.25,8.33,32.917,14.58,51.251l27.51,80.834H1425.5Zm347.5-45H1663.83V280.58h115.42V250.163H1627.58V531H1785.5V500.583H1663.83V399.332H1773v-30ZM1832.58,531h156.26V500.583H1868.83V250.163h-36.25V531Z"
              />
            </svg>
            <button className={home.buttonHover}> Hover Me ! </button>
          </li> */}
        </ul>
      </div>

      <div className={home.footer}>
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

export default Home;
