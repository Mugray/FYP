// Define the API URL
const apiUrl = 'https://api.thingspeak.com/channels/2451872/feeds.json?api_key=VQY0KLAJJ6E4HA9H&results=2';

// Get the HTML elements
const coElement = document.getElementById('co');
const ozoneElement = document.getElementById('ozone');
const pm25Element = document.getElementById('pm25');
const populationElement = document.getElementById('population');
const tempElement = document.getElementById('temp');
const humElement = document.getElementById('hum');
const AllData = document.getElementById('alldata');

// Fetch the data from ThingSpeak
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const feeds = data.feeds;
        const latestFeed = feeds[0];

        // Update the sensor data
        coElement.textContent = latestFeed.field1 + ' ppm';
        ozoneElement.textContent = latestFeed.field2 + ' ppm';
        pm25Element.textContent = latestFeed.field3 + ' μg/m³';
        populationElement.textContent = latestFeed.field4 + ' people';
        tempElement.textContent = latestFeed.field5 + '°C';
        humElement.textContent = latestFeed.field6 + '%';

        // Create charts
        const coChart = new Chart(document.getElementById('co-chart'), {
            type: 'line',
            data: {
                labels: feeds.map(feed => feed.created_at),
                datasets: [{
                    label: 'CO (ppm)',
                    data: feeds.map(feed => feed.field1),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ozoneChart = new Chart(document.getElementById('ozone-chart'), {
            type: 'line',
            data: {
                labels: feeds.map(feed => feed.created_at),
                datasets: [{
                    label: 'Ozone (ppm)',
                    data: feeds.map(feed => feed.field2),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const pm25Chart = new Chart(document.getElementById('pm25-chart'), {
            type: 'line',
            data: {
                labels: feeds.map(feed => feed.created_at),
                datasets: [{
                    label: 'PM2.5 (μg/m³)',
                    data: feeds.map(feed => feed.field3),
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const tempChart = new Chart(document.getElementById('temp-chart'), {
            type: 'line',
            data: {
                labels: feeds.map(feed => feed.created_at),
                datasets: [{
                    label: 'Temperature (°C)',
                    data: feeds.map(feed => feed.field5),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const humChart = new Chart(document.getElementById('hum-chart'), {
            type: 'line',
            data: {
                labels: feeds.map(feed => feed.created_at),
                datasets: [{
                    label: 'Humidity (%)',
                    data: feeds.map(feed => feed.field6),
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error(error));