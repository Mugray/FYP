// Define the API URL
const apiUrl = 'https://api.thingspeak.com/channels/2451872/feeds.json?api_key=VQY0KLAJJ6E4HA9H&results=2';

// Get the HTML elements
const coElement = document.getElementById('co');
const ozoneElement = document.getElementById('ozone');
const populationElement = document.getElementById('population');
const tempElement = document.getElementById('temp');
const humElement = document.getElementById('hum');

// Function to fetch data from Thingspeak API
async function fetchData() {
  try {
    console.log('Fetching data from API...');
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.feeds || data.feeds.length === 0) {
      throw new Error('No data found in API response');
    }
    const lastEntry = data.feeds[0];

    // Update the dashboard widgets
    updateCO(lastEntry.field1);
    updateOzone(lastEntry.field2);
    updatePopulation(lastEntry.field3);
    updateTemp(lastEntry.field5);
    updateHum(lastEntry.field6);
  } catch (error) {
    console.error('Error fetching data:', error);
    coElement.innerHTML = 'Error fetching data';
    ozoneElement.innerHTML = 'Error fetching data';
    populationElement.innerHTML = 'Error fetching data';
    tempElement.innerHTML = 'Error fetching data';
    humElement.innerHTML = 'Error fetching data';
  }
}

// Functions to update the dashboard widgets
function updateCO(coValue) {
  coElement.innerHTML = `CO Level: ${coValue}`;
}

function updateOzone(ozoneValue) {
  ozoneElement.innerHTML = `Ozone Level: ${ozoneValue}`;
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

// Fetch data every 10 seconds
setInterval(fetchData, 10000);

// Initial data fetch
fetchData();
