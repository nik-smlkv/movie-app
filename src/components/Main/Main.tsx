import React from "react";
import Description from "./Description/Description";
import Similar from "./Similar/Similar";
import "../../styles/style.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <Description />
      </div>
        <Similar />
    </div>
  );
};

export default Main;
