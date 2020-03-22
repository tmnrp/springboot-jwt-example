import "./Covid19Filter.scss";
import React, { useState } from "react";
import { filterCovid19Data } from "../../../../utils/covid-19-service/Covid19Service";

const Covid19Filter = props => {
  return (
    <div id="tm-Covid19Filter">
      <div className="tm-input-field-wrap">
        <input
          className="tm-input-field"
          type="text"
          placeholder="Search by Country"
          value={props.filterText}
          onChange={e =>
            onFilterChange(e, props.setFilterText, props.setCovid19Data)
          }
        />
      </div>
    </div>
  );
};

const onFilterChange = (e, setFilterText, setCovid19Data) => {
  setFilterText(e.target.value);
  setCovid19Data(filterCovid19Data("Country/Region", e.target.value));
};

export default Covid19Filter;
