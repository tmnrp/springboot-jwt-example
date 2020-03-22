import "./CardView.scss";
import React from "react";

const Card = props => {
  const latestDate = localStorage.getItem("covid19LatestDate");
  return (
    <div className="card-wrap">
      <div className="card-container">
        <div className="card-title-contaier">
          <div>{props.data["Country/Region"]}</div>
        </div>
        <hr />

        <div className="card-content-container">
          <div>C: {props.data[latestDate + "-confirmed"]}</div>
        </div>
        <hr />

        <div className="card-content-container">
          <div>R: {props.data[latestDate + "-recovered"]}</div>
        </div>
        <hr />

        <div className="card-content-container">
          <div>D: {props.data[latestDate + "-death"]}</div>
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
