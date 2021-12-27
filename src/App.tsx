import React from "react";
import { Footer } from "./components/Footer";
import { SearchBox } from "./components/SearchBox";
import "./styles/index.css";

export const App = () => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <SearchBox />
        </div>
      </div>
      <Footer />
    </div>
  );
};
