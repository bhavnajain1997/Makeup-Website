import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // 1. Import karo
import AppLayout from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Makeup-Website"> {/* 2. Wrap karo */}
      <AppLayout />
    </BrowserRouter>
  </React.StrictMode>
);