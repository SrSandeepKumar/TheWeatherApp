import { weatherService } from '../services';

const fetchData = () => {
  debugger;
  return weatherService.getWeather()
  .then((res, arg1, arg2, arg3) => {
    debugger;
    console.log(arg1, arg2, arg3);
    return res.data;
  })
  .catch((err) => {
      debugger;
    console.log(err);
  });
};

export default fetchData;

