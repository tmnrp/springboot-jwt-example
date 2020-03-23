import "./Covid19.scss";
import React, { useState, useEffect, createContext } from "react";
import { fetchCovid19Data } from "../../utils/covid-19-service/Covid19Service";
import CardView from "./card-view/CardView";
import GridView from "./gridView/GridView";
import Covid19Utility from "./covid-19-uility/Covid19Utility";

export const Covid19Context = createContext();

const Covid19 = props => {
  const [covid19Data, setCovid19Data] = useState([]);
  const [sortBy, setSortBy] = useState("Sory By");
  const [viewBy, setViewBy] = useState("CARDS");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchCovid19Data(data => fetchCovid19DataCallback(data, setCovid19Data));
  }, []);

  return (
    <Covid19Context.Provider
      value={[
        sortBy,
        setSortBy,
        covid19Data,
        setCovid19Data,
        setViewBy,
        filterText,
        setFilterText
      ]}
    >
      <div id="covid19-container">
        <Covid19Utility />
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
          <GridView />
        )}
      </div>
    </Covid19Context.Provider>
  );
};

const fetchCovid19DataCallback = (data, setCovid19Data) => {
  setCovid19Data(data);
};

export default Covid19;
