// script.js

// Define the API URL
const apiUrl = 'https://api.thingspeak.com/channels/2451872/feeds.json?api_key=VQY0KLAJJ6E4HA9H&results=2';

// Get the HTML elements
const coElement = document.getElementById('co');
const ozoneElement = document.getElementById('ozone');
const pm25Element = document.getElementById('pm25');
const populationElement = document.getElementById('population');
const tempElement = document.getElementById('temp');
const humElement = document.getElementById('hum');
const allDataElement = document.getElementById('alldata');

// Function to fetch data from Thingspeak API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const lastEntry = data.feeds[0];

    // Update the dashboard widgets
    updateCO(lastEntry.field1);
    updateOzone(lastEntry.field2);
    updatePM25(lastEntry.field3);
    updatePopulation(lastEntry.field4);
    updateTemp(lastEntry.field5);
    updateHum(lastEntry.field6);
    updateAllData(data.feeds);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Functions to update the dashboard widgets
function updateCO(coValue) {
  coElement.innerHTML = `CO Level: ${coValue} ppm`;
}

function updateOzone(ozoneValue) {
  ozoneElement.innerHTML = `Ozone Level: ${ozoneValue} ppm`;
}

function updatePM25(pm25Value) {
  pm25Element.innerHTML = `PM2.5 Level: ${pm25Value} μg/m³`;
}

function updatePopulation(populationValue) {
  populationElement.innerHTML = `Bee Population: ${populationValue}`;
}

function updateTemp(tempValue) {
  tempElement.innerHTML = `Temperature: ${tempValue} °C`;
}

function updateHum(humValue) {
  humElement.innerHTML = `Humidity: ${humValue}%`;
}

// function updateAllData(data) {
//   const tableHtml = '<table><tr><th>Date</th><th>CO</th><th>Ozone</th><th>PM2.5</th><th>Population</th><th>Temp</th><th>Hum</th></tr>';
//   data.forEach((entry) => {
//     tableHtml += `<tr><td>${entry.created_at}</td><td>${entry.field1}</td><td>${entry.field2}</td><td>${entry.field3}</td><td>${entry.field4}</td><td>${entry.field5}</td><td>${entry.field6}</td></tr>`;
//   });
//   tableHtml += '</table>';
//   allDataElement.innerHTML = tableHtml;
// }

// Fetch data every 10 seconds
setInterval(fetchData, 10000);

// Initial data fetch
fetchData();