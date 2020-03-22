import axios from "axios";
import csv from "csvtojson";

export const fetchCovid19LastUpdatedData = callback => {
  axios({
    method: "get",
    url:
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
  }).then(response => {
    csv({
      noheader: true,
      output: "csv"
    })
      .fromString(response.data)
      .then(csvRow => {
        callback(processCovid19Data(csvRow));
      });
  });
};

const processCovid19Data = data => {
  const headers = data.splice(0, 1)[0];
  const processedData = [];

  data = data.sort((itemA, itemB) => {
    return itemA[1][0] < itemB[1][0] ? -1 : 1;
  });
  data.forEach((element, index) => {
    const processedItem = { id: index };
    element.forEach((item, i) => {
      processedItem[headers[i]] = item;
    });
    processedData.push(processedItem);
  });
  return processedData;
};
