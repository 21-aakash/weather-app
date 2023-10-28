async function fetchData (city) {
    // This is the definition of an asynchronous function called fetchData.
    // It will fetch weather data from an API and update the DOM with the data.
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    // Define the URL of the API you want to fetch data from.
    cityName.innerHTML =city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '20604c44bdmshc36d8c07c101298p126149jsn9ce819588a9b',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    // Configure the request options, including the HTTP method and headers.

    try {
        const response = await fetch(url, options);
        // Use the Fetch API to make an HTTP GET request to the specified URL with the provided options.
        const result = await response.json();
        // Parse the response as JSON, creating a JavaScript object.
        console.log(result);

        // Update the DOM with weather data
        cloud_pct.innerHTML = result.cloud_pct;
        // "cloud_pct" to the cloud percentage value.
        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        // "temp" to the temperature value.
        feels_like.innerHTML = result.feels_like;
        // "feels_like" to the "feels like" temperature value.
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        // "humidity" to the humidity value.
        min_temp.innerHTML = result.min_temp;
        // "min_temp" to the minimum temperature value.
        max_temp.innerHTML = result.max_temp;
        // "max_temp" to the maximum temperature value.
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        // "wind_speed" to the wind speed value.
        wind_degrees.innerHTML = result.wind_degrees;
        // "wind_degrees" to the wind direction value.
        sunrise.innerHTML = result.sunrise;
        // "sunrise" to the sunrise time value.
        sunset.innerHTML = result.sunset;
        // "sunset" to the sunset time value.
    } catch (error) {
        console.error(error);
        // Handle any errors that may occur during the fetch or data parsing.
    }
}


// Define an event listener that triggers fetchData when a button with the id "submit" is clicked.
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(city.value);
});
// This sets up an event listener for a button with the id "submit" and calls fetchData when the button is clicked.

// Call the fetchData function when the page loads.
fetchData("Delhi");
// This immediately calls the fetchData function when the page is loaded
// Create an object to store the API data
