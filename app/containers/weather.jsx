import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

// initial implementation, will be introducing a normalise layer which gives formatted data.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const fetchWeatherInfo = data => data && data.weather.map((w, index) => (
  <ul key={index}>
    <li> {w.description} </li>
    <li> {w.main} </li>
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

const weatherUI = ({ data }) => {
  const { city = '', list = [] } = data;
  return (
    <div>
      <p>{city.name} </p>
      <ul> {formatOtherInfo(list)} </ul>
    </div>

  );
};

function mapStateToProps(state) {
  return {...state.weather};
}

export default connect(mapStateToProps)(weatherUI);
