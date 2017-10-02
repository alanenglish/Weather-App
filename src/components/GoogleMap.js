import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // makes use of ref system in react, allows us to get a direct reference of HTML element that
    // has been rendered to the page
    return <div ref="map" />;
  }
}

export default GoogleMap;
