

// let whetherApi = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



// let whetherApi = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=8109c66605e33fe0ace3022934effd5c`;


//after removing  lat and lon
// let whetherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8109c66605e33fe0ace3022934effd5c`;


async function getWeatherApi(city) {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8109c66605e33fe0ace3022934effd5c`;

    try {
        const response = await fetch(weatherApi);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}





export { getWeatherApi };