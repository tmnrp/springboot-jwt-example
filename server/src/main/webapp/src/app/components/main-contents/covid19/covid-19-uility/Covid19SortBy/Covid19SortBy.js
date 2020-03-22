import "./Covid19SortBy.scss";
import React, { useState } from "react";
import { sortCovid19Data } from "../../../../utils/covid-19-service/Covid19Service";

const Covid19SortBy = props => {
  const [sortBy, setSortBy] = useState("Sory By");
  const [initalRender, setInitalRender] = useState(true);
  return (
    <div>
      <select
        value={sortBy}
        className="tm-select"
        onChange={e =>
          onSortChange(
            e,
            props.setCovid19Data,
            setSortBy,
            setInitalRender,
            props.setFilterText
          )
        }
      >
        {fetchSortByOptions(initalRender)}
      </select>
    </div>
  );
};
const onSortChange = (
  e,
  setCovid19Data,
  setSortBy,
  setInitalRender,
  setFilterText
) => {
  setInitalRender(false);
  setSortBy(e.target.value);
  const sortedData = sortCovid19Data(e.target.value);
  setCovid19Data(sortedData);
  setFilterText("");
};

const fetchSortByOptions = initalRender => {
  return initalRender ? (
    <>
      <option>Sory By</option>
      {defaultSortByOptions()}
    </>
  ) : (
    defaultSortByOptions()
  );
};

const defaultSortByOptions = () => {
  return (
    <>
      <option>Country/Region</option>
      <option>Total Cases</option>
    </>
  );
};

export default Covid19SortBy;
