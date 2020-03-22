import "./GridView.scss";
import React from "react";

const GridView = props => {
  return (
    <div id="tm-GridView">
      <table>
        <tbody>{getHeaders()}</tbody>
        <tbody>{getRows()}</tbody>
      </table>
    </div>
  );
};

const getHeaders = () => {
  return (
    <tr>
      <th>Province</th>
      <th>Country</th>
      <th>Confirmed</th>
      <th>Recovered</th>
      <th>Death</th>
    </tr>
  );
};

const getRows = () => {
  const dataset = JSON.parse(localStorage.getItem("covid19dataset"));
  const latestDate = localStorage.getItem("covid19LatestDate");
  return dataset.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item["Province/State"]}</td>
        <td>{item["Country/Region"]}</td>
        <td>{item[latestDate + "-confirmed"]}</td>
        <td>{item[latestDate + "-recovered"]}</td>
        <td>{item[latestDate + "-death"]}</td>
      </tr>
    );
  });
};

export default GridView;
