import React from "react";
import ReactDOM from "react-dom/client";
import GenInfo from "./GenInfo.jsx";
import EduInfo from "./EduInfo.jsx";
import JobInfo from "./JobInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GenInfo />
    <EduInfo />
    <JobInfo />
  </React.StrictMode>
);
