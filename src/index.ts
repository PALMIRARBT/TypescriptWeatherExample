import './styles/main.scss';

// TODO: Import the API request method
import { fetchWeather } from './networking/weather';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// TODO: Add an event listener to the button
if (buttonClick) {
    buttonClick.addEventListener('click', handleWeatherRequest);
}

// TODO: Create an async function to call the API method
async function handleWeatherRequest() {
    const city = getCity();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }
    const weather = await fetchWeather(city);
    if (weather) {
        updateInteface(weather);
    } else {
        alert('Failed to fetch weather data.');
    }
}
