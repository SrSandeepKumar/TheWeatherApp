import { weatherService } from '../services';

export const fetchForecastData = () => {
  return weatherService.getForecast()
  .then(res => {
    if (res.status === 200) {
      console.log(res.data);
      return {data: res.data};
    } else {
      // handle sending error message.
    }
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  });
};

export const fetchWeatherData = () => {
  return weatherService.getWeather()
    .then(res => {
      if (res.status === 200) {
        debugger;
        return {data: res.data};
      } else {
        // handle sending error message.
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};


