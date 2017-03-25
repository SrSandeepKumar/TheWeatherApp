import React, { Component } from 'react';
import Page from '../pages/Page';
import WeatherContainer from '../containers/weather';

class Weather extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Weather | Home';
  }

  pageMeta() {
    return [
      { name: 'Weather Home', content: 'A progressive Weather application' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    debugger;
    return (
      <Page {...this.getMetaData()}>
        <WeatherContainer />
      </Page>
    );
  }
}

export default Weather;

