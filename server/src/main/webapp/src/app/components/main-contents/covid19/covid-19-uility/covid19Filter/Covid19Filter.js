import "./Covid19Filter.scss";
import React, { useContext } from "react";
import { Covid19Context } from "../../Covid19";
import { filterData } from "../../../../utils/covid-19-service/Covid19Service";

const Covid19Filter = props => {
  const [
    sortBy,
    setSortBy,
    covid19Data,
    setCovid19Data,
    setViewBy,
    filterText,
    setFilterText
  ] = useContext(Covid19Context);
  return (
    <div id="tm-Covid19Filter">
      <div className="tm-input-field-wrap">
        <input
          className="tm-input-field"
          type="text"
          placeholder="Search by Country"
          value={filterText}
          onChange={e => onFilterChange(e, setFilterText, setCovid19Data)}
        />
      </div>
    </div>
  );
};

const onFilterChange = (e, setFilterText, setCovid19Data) => {
  setFilterText(e.target.value);
  setCovid19Data(filterData("Country/Region", e.target.value));
};

export default Covid19Filter;
