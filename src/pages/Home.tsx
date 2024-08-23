import React from "react";
import "./Home.css";
import Converter from "../components/Converter";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="bar"></div>
      <div className="introduction">
        <h1>Metric To American Converter</h1>
        <p>
          A website for all the fellow Americans to learn about the confusing
          inferior metric unit.
        </p>
      </div>
      <div className="quote">
        <div className="quote-pic"></div>
        <div className="quote-text">
          "If God had wanted us to use the metric system, Jesus would have had
          10 apostles." - Someone, Probably.
        </div>
      </div>
      <Converter />
      <div className="bar">
        This site was made for humour purposes, please don't get mad :(
      </div>
    </div>
  );
};

export default Home;
