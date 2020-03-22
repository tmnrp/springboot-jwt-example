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

  data.forEach((element, index) => {
    const processedItem = { id: index };
    element.forEach((item, i) => {
      processedItem[headers[i]] = item;
    });
    processedData.push(processedItem);
  });
  localStorage.setItem("covid19dataset", JSON.stringify(processedData));

  return processedData;
};

export const sortCovid19Data = sortBy => {
  const data = JSON.parse(localStorage.getItem("covid19dataset"));
  let sortedData = [];
  if (sortBy == "Country/Region") {
    sortedData = sortCovid19DataByCountry(data, sortBy);
  } else if (sortBy == "Total Cases") {
    sortedData = sortCovid19DataByTotalCases(data, "3/21/20");
  }
  localStorage.setItem("covid19dataset", JSON.stringify(sortedData));
  return sortedData;
};

const sortCovid19DataByCountry = (data, sortBy) => {
  return data.sort((itemA, itemB) => {
    return itemA[sortBy][0] < itemB[sortBy][0] ? -1 : 1;
  });
};

const sortCovid19DataByTotalCases = (data, sortBy) => {
  return data.sort((itemA, itemB) => {
    return parseInt(itemA[sortBy]) > parseInt(itemB[sortBy]) ? -1 : 1;
  });
};

export const filterCovid19Data = (filterOn, filterBy) => {
  const data = JSON.parse(localStorage.getItem("covid19dataset"));
  if (filterOn == "Country/Region") {
    return filterCovid19DataByCountry(filterBy, data);
  } else {
    return [];
  }
};

const filterCovid19DataByCountry = (filterBy, data) => {
  return data.filter(item => {
    return item["Country/Region"].toLowerCase().startsWith(filterBy);
  });
};
