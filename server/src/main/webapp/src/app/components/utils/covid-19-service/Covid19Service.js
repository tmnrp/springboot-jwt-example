import axios from "axios";
import csv from "csvtojson";

export const fetchCovid19Data = async callback => {
  const confirmedJson = await fetchConfirmedData();
  const recoveredJson = await fetchRecoveredData();
  const deathJson = await fetchDeathData();

  localStorage.setItem(
    "covid19LatestDate",
    deathJson[0][deathJson[0].length - 1]
  );

  const processedData = processAndMergeJsonData(
    confirmedJson,
    recoveredJson,
    deathJson
  );

  localStorage.setItem("covid19dataset", JSON.stringify(processedData));
  callback(processedData);
};

const processAndMergeJsonData = (confirmed, recovered, death) => {
  let processedAndMergedData = [];
  processedAndMergedData = processConfirmedData(
    confirmed,
    processedAndMergedData
  );
  processedAndMergedData = processRecoveredData(
    recovered,
    processedAndMergedData
  );
  processedAndMergedData = processDeathData(death, processedAndMergedData);
  return processedAndMergedData;
};

const processConfirmedData = (data, processedAndMergedData) => {
  return doProcessAndMergeJsonData(data, processedAndMergedData, "confirmed");
};

const processRecoveredData = (data, processedAndMergedData) => {
  return doProcessAndMergeJsonData(data, processedAndMergedData, "recovered");
};

const processDeathData = (data, processedAndMergedData) => {
  return doProcessAndMergeJsonData(data, processedAndMergedData, "death");
};

const doProcessAndMergeJsonData = (
  data,
  processedAndMergedData,
  appendString
) => {
  const headers = data.splice(0, 1)[0];
  data.forEach((record, index) => {
    record.forEach((item, i) => {
      if (!processedAndMergedData[index]) {
        processedAndMergedData.push({});
      }
      if (
        processedAndMergedData[index] &&
        processedAndMergedData[index] &&
        !processedAndMergedData[index].hasOwnProperty("id")
      ) {
        processedAndMergedData[index]["id"] = index;
      }

      switch (headers[i]) {
        case "Province/State":
        case "Country/Region":
        case "Lat":
        case "Long":
          if (
            processedAndMergedData[index] &&
            processedAndMergedData[index] &&
            !processedAndMergedData[index].hasOwnProperty(headers[i])
          ) {
            processedAndMergedData[index][headers[i]] = item;
          }
          break;
        default:
          if (processedAndMergedData[index] && processedAndMergedData[index]) {
            processedAndMergedData[index][
              headers[i] + "-" + appendString
            ] = item;
          }
          break;
      }
    });
  });

  return processedAndMergedData;
};

export const sortData = sortBy => {
  const data = JSON.parse(localStorage.getItem("covid19dataset"));
  const latestDate = localStorage.getItem("covid19LatestDate");
  let sortedData = [];
  if (sortBy == "Country/Region") {
    sortedData = sortDataByCountry(data, sortBy);
  } else if (sortBy == "Confirmed") {
    sortedData = sortDataByTotal(data, latestDate + "-confirmed");
  } else if (sortBy == "Recovered") {
    sortedData = sortDataByTotal(data, latestDate + "-recovered");
  } else if (sortBy == "Death") {
    sortedData = sortDataByTotal(data, latestDate + "-death");
  }
  localStorage.setItem("covid19dataset", JSON.stringify(sortedData));
  return sortedData;
};

const sortDataByCountry = (data, sortBy) => {
  return data.sort((itemA, itemB) => {
    return itemA[sortBy][0] < itemB[sortBy][0] ? -1 : 1;
  });
};

const sortDataByTotal = (data, sortBy) => {
  return data.sort((itemA, itemB) => {
    return parseInt(itemA[sortBy]) > parseInt(itemB[sortBy]) ? -1 : 1;
  });
};

export const filterData = (filterOn, filterBy) => {
  const data = JSON.parse(localStorage.getItem("covid19dataset"));
  if (filterOn == "Country/Region") {
    return filterDataByCountry(filterBy, data);
  } else {
    return [];
  }
};

const filterDataByCountry = (filterBy, data) => {
  return data.filter(item => {
    return item["Country/Region"].toLowerCase().startsWith(filterBy.toLowerCase());
  });
};

const fetchConfirmedData = async () => {
  const confirmedCsv = await axios.get(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
  );
  return convertCsvToJson(confirmedCsv.data);
};

const fetchRecoveredData = async () => {
  const recoveredCsv = await axios.get(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv"
  );
  return convertCsvToJson(recoveredCsv.data);
};

const fetchDeathData = async () => {
  const deathCsv = await axios.get(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv"
  );
  return convertCsvToJson(deathCsv.data);
};

const convertCsvToJson = async data => {
  return await csv({
    noheader: true,
    output: "csv"
  }).fromString(data);
};
