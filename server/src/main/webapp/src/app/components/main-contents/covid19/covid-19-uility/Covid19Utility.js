import "./Covid19Utility.scss";
import React, { useState } from "react";
import Covid19SortBy from "./Covid19SortBy/Covid19SortBy";
import Covid19Filter from "./covid19Filter/Covid19Filter";
import Covid19ViewBy from "./covid19ViewBy/Covid19ViewBy";

const Covid19Utility = props => {
  return (
    <div className="covid-19-utility-container">
      <Covid19Filter />
      <Covid19ViewBy />
      <Covid19SortBy />
    </div>
  );
};

export default Covid19Utility;
