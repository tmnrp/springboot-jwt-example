import "./Card.scss";
import React from "react";

const Card = props => {
  return (
    <div className="card-wrap">
      <div className="card-container">
        <div className="card-title-contaier">
          <div>{props.data["Country/Region"]}</div>
        </div>
        <hr />

        <div className="card-content-container">
          <div>{props.data["3/21/20"]}</div>
        </div>
        <hr />

        <div className="card-provision-state-contaier">
          <div>{props.data["Province/State"]}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
