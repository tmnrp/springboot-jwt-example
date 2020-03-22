import "./Covid19.scss";
import React, { useState, useEffect } from "react";
import { fetchCovid19LastUpdatedData } from "../../utils/covid-19-service/Covid19Service";
import Card from "../../utils/card/Card";
import Covid19Utility from "./covid-19-uility/Covid19Utility";

const Covid19 = props => {
  const [covid19Data, setCovid19Data] = useState([]);

  useEffect(() => {
    fetchCovid19LastUpdatedData(data => {
      setCovid19Data(data);
    });
  }, []);

  return (
    <div id="covid19-container">
      <Covid19Utility setCovid19Data={setCovid19Data} />
      {covid19Data.map((item, index) => {
        return (
          <Card
            key={item["Country/Region"] + index}
            title="Country/Region"
            data={item}
          />
        );
      })}
    </div>
  );
};

export default Covid19;
