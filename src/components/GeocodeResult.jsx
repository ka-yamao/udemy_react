import React from 'react';
import PropTypes from 'prop-types';

const GeocodeResulet = ({ address, lat, lng }) => (
  <ul className="geocode-result">
    <li>
      住所：
      {address}
    </li>
    <li>
      緯度：
      {lat}
    </li>
    <li>
      軽度：
      {lng}
    </li>
  </ul>
);

GeocodeResulet.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default GeocodeResulet;
