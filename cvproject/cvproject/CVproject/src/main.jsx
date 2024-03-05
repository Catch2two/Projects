import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CvInfo from "./info.jsx";
import School from "./school.jsx";
import School2 from "./school2.jsx";
import School3 from "./school3.jsx";
import Experiences from "./experiences.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CvInfo />
    <School />
    <School2 />
    <School3 />
    <Experiences />
  </React.StrictMode>
);
