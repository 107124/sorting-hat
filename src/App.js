import React from "react";
import Sorter from "./sorter";
import Footer from "./footer";

import "./styles.css";
import "./media-queries.css";

export default function App() {
  return (
    <div className="App-container">
      <Sorter />
      <Footer />
    </div>
  );
}
