import React, { useState } from "react";
import css from "../styling/home.module.css";

const Jeff = () => {
  const [visible, setVisible] = useState("hidden");

  //   useState(() => {
  //     setInterval(() => {
  //       setVisible("visible");
  //     }, 1000);
  //     setInterval(() => {
  //       setVisible("hidden");
  //     }, 3000);
  //   }, [visible]);

  var input = document.getElementById("input");

  const [number, setNumber] = useState(131);

  const moveItem = () => {
    input.innerHTML = input.innerHTML + "Q";
    setNumber(number + 1.8);
  };

  return (
    <div>
      <span style={{ position: "relative", top: "33vh", left: "49vw" }}>
        <button onClick={moveItem} style={{ cursor: "pointer" }}>
          {" "}
          Q{" "}
        </button>
      </span>
      <span className={css.line2} id="input"></span>
      <div className={css.line} style={{ left: `${number}vh` }}></div>
    </div>
  );
};

export default Jeff;
