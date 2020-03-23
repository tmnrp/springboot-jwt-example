import "./Covid19ViewBy.scss";
import React, { useContext } from "react";
import { Covid19Context } from "../../Covid19";

const Covid19ViewBy = props => {
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
    <div id="tm-Covid19ViewBy">
      <select
        className="tm-select"
        onChange={e => {
          setViewBy(e.target.value);
        }}
      >
        <option>CARDS</option>
        <option>GRID</option>
      </select>
    </div>
  );
};

export default Covid19ViewBy;
