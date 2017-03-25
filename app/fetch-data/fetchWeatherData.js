import { weatherService } from '../services';

const fetchData = () => {
  return weatherService.getWeather()
  .then(res => {
    if (res.status === 200) {
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

export default fetchData;

