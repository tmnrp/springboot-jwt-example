import "./MainContent.scss";
import React, { useState, useEffect } from "react";
import Covid19 from "./covid19/Covid19";

const MainContent = props => {
  return (
    <div id="tm-main-content">
      <Covid19 />
    </div>
  );
};

export default MainContent;
