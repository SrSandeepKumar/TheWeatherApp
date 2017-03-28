import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

// initial implementation, will be introducing a normalise layer which gives formatted data.
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const fetchWeatherInfo = data => data && data.weather.map((w, index) => (
  <ul key={index}>
    <li> {w.description} </li>
    <li> {w.main} </li>
    <li> <img src={`http://openweathermap.org/img/w/${w.icon}.png`} /> </li>
  </ul>
));

const formatOtherInfo = (list) => list && list.map((data, index) => {
  return (
    <ul key={index}>
      <li>
        <span> {days[new Date(data.dt_txt).getDay()]} :</span>
        <span> {new Date(data.dt_txt).getDate()} - {new Date(data.dt_txt).getMonth() + 1} </span>
        <span> ({new Date(data.dt_txt).getHours()}:{new Date(data.dt_txt).getMinutes()}) </span>
      </li>
      {fetchWeatherInfo(data)}
    </ul>
  )
});

const fetchMainWeatherInfo = (data) => {
  if (data) {
    const mainEntities = Object.keys(data);
    return mainEntities.map((val, index) => {
      debugger;
      return (
        <li key={index}> {val}: {data[val]} </li>
      );
    });
  } return null;
};


const weatherUI = ({ data }) => {
  debugger;
  const { name = '', list = [] } = data;
  return (
    <div>
      <p>{name} </p>
      <ul>{fetchWeatherInfo(data)} </ul>
      <ul>{fetchMainWeatherInfo(data.main)} </ul>
      <ul> {formatOtherInfo(list)} </ul>
    </div>

  );
};

function mapStateToProps(state) {
  return {...state.weather};
}

export default connect(mapStateToProps)(weatherUI);
