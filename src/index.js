import React from "react";
import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router-dom";  
import AppLayout from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
   <React.StrictMode>
      <AppLayout />
  </React.StrictMode>
  </>
  
);