
// Define the API URL
const apiUrl = 'https://api.thingspeak.com/channels/2451872/feeds.json?api_key=VQY0KLAJJ6E4HA9H&results=2';

const coElement = document.getElementById('co');
const ozoneElement = document.getElementById('ozone');
const pm25Element = document.getElementById('pm25');
const populationElement = document.getElementById('population');
const tempElement = document.getElementById('temp');
const humElement = document.getElementById('hum');
const AllData = document.getElementById('alldata');
// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(AllData);
    // Display data in an HTML element
    AllData.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });




// 1
// Make a GET request
fetch(' https://api.thingspeak.com/channels/2451872/fields/1.json?api_key=VQY0KLAJJ6E4HA9H&results=2')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
//   console.log(data);
//   console.log(AllData);
  // Display data in an HTML element
  coElement.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error('Error:', error);
});




// 1
// Make a GET request
fetch(' https://api.thingspeak.com/channels/2451872/fields/2.json?api_key=VQY0KLAJJ6E4HA9H&results=2')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
//   console.log(data);
//   console.log(AllData);
  // Display data in an HTML element
  ozoneElement.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error('Error:', error);
});



// 1
// Make a GET request
fetch(' https://api.thingspeak.com/channels/2451872/fields/3.json?api_key=VQY0KLAJJ6E4HA9H&results=2')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
//   console.log(data);
//   console.log(AllData);
  // Display data in an HTML element
  pm25Element.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error('Error:', error);
});



// 1
// Make a GET request
fetch(' https://api.thingspeak.com/channels/2451872/fields/4.json?api_key=VQY0KLAJJ6E4HA9H&results=2')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
//   console.log(data);
//   console.log(AllData);
  // Display data in an HTML element
  populationElement.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error('Error:', error);
});



// 1
// Make a GET request
fetch(' https://api.thingspeak.com/channels/2451872/fields/5.json?api_key=VQY0KLAJJ6E4HA9H&results=2')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
//   console.log(data);
//   console.log(AllData);
  // Display data in an HTML element
  tempElement.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error('Error:', error);
});



// 1
// Make a GET request
fetch(' https://api.thingspeak.com/channels/2451872/fields/6.json?api_key=VQY0KLAJJ6E4HA9H&results=2')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
//   console.log(data);
//   console.log(AllData);
  // Display data in an HTML element
  humElement.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error('Error:', error);
});