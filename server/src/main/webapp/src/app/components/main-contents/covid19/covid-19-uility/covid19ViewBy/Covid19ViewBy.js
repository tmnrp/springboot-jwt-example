import "./Covid19ViewBy.scss";
import React from "react";

const Covid19ViewBy = props => {
  return (
    <div id="tm-Covid19ViewBy">
      <select
        className="tm-select"
        onChange={e => {
          props.setViewBy(e.target.value);
        }}
      >
        <option>CARDS</option>
        <option>GRID</option>
      </select>
    </div>
  );
};

export default Covid19ViewBy;
