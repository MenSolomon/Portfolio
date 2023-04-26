import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/Home";
import SipAndSavor from "./components/SipAndSavor";
import { BrowserRouter } from "react-router-dom";
import Jeff from "./components/jeff";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SipAndSavor /> */}
    {/* <Home /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Jeff /> */}
  </React.StrictMode>
);
