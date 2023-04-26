import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import SipAndSavor from "./components/SipAndSavor";
import { AnimatePresence } from "framer-motion";
import ChatteauNourriture from "./components/ChatteauNourriture";
import CryptoApp from "./components/CryptoYard";
import Lenis from "@studio-freight/lenis";

function App() {
  const location = useLocation();

  const lenis = new Lenis({});

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/caseStudy1.sip&Savour"
            element={<SipAndSavor />}
          ></Route>
          <Route
            path="/caseStudy2.chatteauNourriture"
            element={<ChatteauNourriture />}
          ></Route>
          <Route path="/caseStudy3.cryptoYard" element={<CryptoApp />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
