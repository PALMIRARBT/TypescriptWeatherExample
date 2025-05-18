import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const cityInput = document.getElementById("weather-location-input") as HTMLInputElement;
const tempElement = document.getElementById("weather-temp");
const descElement = document.getElementById("weather-desc");
const cityElement = document.getElementById("location-text");
const windElement = document.getElementById("text-wind");
const humidityElement = document.getElementById("text-humidity");
const feelsLikeElement = document.getElementById("feels-like");
const tempMaxElement = document.getElementById("text-temp-max");
const tempMinElement = document.getElementById("text-temp-min");

// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    if (!weather) return;
    if (cityElement) cityElement.textContent = weather.name;
    if (tempElement) tempElement.textContent = `${Math.round(weather.main.temp)}°C`;
    if (descElement) descElement.textContent = weather.weather[0].description;
    if (windElement) windElement.textContent = `Wind: ${weather.wind.speed} m/s`;
    if (humidityElement) humidityElement.textContent = `Humidity: ${weather.main.humidity}%`;
    if (feelsLikeElement) feelsLikeElement.textContent = `Feels like: ${Math.round(weather.main.feels_like)}°C`;
    if (tempMaxElement) tempMaxElement.textContent = `${Math.round(weather.main.temp_max)} ºC`;
    if (tempMinElement) tempMinElement.textContent = `${Math.round(weather.main.temp_min)} ºC`;
    if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = WeatherIcon[weather.weather[0].icon as WeatherIcontype] ?? WeatherIcon["01d"];
}

// TODO: Get the city from the input element
export function getCity(): string {
    return cityInput ? cityInput.value : "";
}

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
}

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
    }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');    
    }
}

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
}