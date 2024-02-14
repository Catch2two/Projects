import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CvInfo from "./info.jsx";
import School from "./school.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CvInfo />
    <School />
  </React.StrictMode>
);
