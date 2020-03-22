import "./Covid19Utility.scss";
import React, { useState } from "react";
import Covid19SortBy from "./Covid19SortBy/Covid19SortBy";
import Covid19Filter from "./covid19Filter/Covid19Filter";
import Covid19ViewBy from "./covid19ViewBy/Covid19ViewBy";

const Covid19Utility = props => {
  const [filterText, setFilterText] = useState("");
  return (
    <div className="covid-19-utility-container">
      <Covid19Filter
        filterText={filterText}
        setFilterText={setFilterText}
        setCovid19Data={props.setCovid19Data}
      />
      <Covid19ViewBy setViewBy={props.setViewBy} />
      <Covid19SortBy
        setCovid19Data={props.setCovid19Data}
        setFilterText={setFilterText}
      />
    </div>
  );
};

export default Covid19Utility;
