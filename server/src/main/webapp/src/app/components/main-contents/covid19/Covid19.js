import "./Covid19.scss";
import React, { useState, useEffect } from "react";
import { fetchCovid19Data } from "../../utils/covid-19-service/Covid19Service";
import CardView from "./card-view/CardView";
import GridView from "./gridView/GridView";
import Covid19Utility from "./covid-19-uility/Covid19Utility";

const Covid19 = props => {
  const [covid19Data, setCovid19Data] = useState([]);
  const [viewBy, setViewBy] = useState("CARDS");

  useEffect(() => {
    fetchCovid19Data(data => fetchCovid19DataCallback(data, setCovid19Data));
  }, []);

  return (
    <div id="covid19-container">
      <Covid19Utility setCovid19Data={setCovid19Data} setViewBy={setViewBy} />
      {viewBy === "CARDS" ? (
        covid19Data.map((item, index) => {
          return (
            <CardView
              key={item["Country/Region"] + index}
              title="Country/Region"
              data={item}
            />
          );
        })
      ) : (
        <GridView setCovid19Data={setCovid19Data} />
      )}
    </div>
  );
};

const fetchCovid19DataCallback = (data, setCovid19Data) => {
  setCovid19Data(data);
};

export default Covid19;
