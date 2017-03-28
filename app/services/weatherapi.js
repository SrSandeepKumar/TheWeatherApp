import axios from 'axios';
import { openweathermapAPIKey } from '../../config/secrets';

// Remove this once it checked in heroku :P
console.log('***** Secrete key for openweatherapi ', openweathermapAPIKey);

const service = {
  getForecast: () => axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=13.1340&lon=77.4788&units=metric&appid=${openweathermapAPIKey}`),
  getWeather: () => axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=13.1340&lon=77.4788&units=metric&appid=${openweathermapAPIKey}`)
};

export default service;
