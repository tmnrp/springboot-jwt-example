import "./GridView.scss";
import React, { useContext } from "react";
import { Covid19Context } from "../Covid19";

const GridView = props => {
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
    <div id="tm-GridView">
      <table>
        <tbody>{getHeaders()}</tbody>
        <tbody>{getRows(covid19Data)}</tbody>
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

const getRows = covid19Data => {
  const dataset = covid19Data;
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
