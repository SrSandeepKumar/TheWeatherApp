import axios from 'axios';

const service = {
  getWeather: () => axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=13.1340&lon=77.4788&appid=9d6d89f089730ba5e679b6f5734ad774')
};

export default service;
