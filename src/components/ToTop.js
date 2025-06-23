import React from "react";
import ArrowIcon from "../assets/arrow-icon.svg";

const ToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src={ArrowIcon} alt="arrow" />
    </div>
  );
};

export default ToTop;
