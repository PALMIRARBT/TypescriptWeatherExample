import { WeatherResponse } from "../model/weatherResponse";

const city = 'Example';

const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;

// TODO: Create an async function with an argument called city to return the that of the endpoint

export async function fetchWeather(city: string): Promise<WeatherResponse | null> {
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;
    try {
        const response = await fetch(API_CURRENT);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data as WeatherResponse;
    } catch (error) {
        alert('Failed to fetch weather data. Please check the city name or your network connection.');
        return null;
    }
}

export function fetchWeatherWithPromise(city: string): Promise<WeatherResponse | null> {
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;
    return fetch(API_CURRENT)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data as WeatherResponse)
        .catch(error => {
            alert('Failed to fetch weather data. Please check the city name or your network connection.');
            return null;
        });
}
