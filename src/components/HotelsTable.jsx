import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

const HotelsTable = ({ hotels, sortKey, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh
          lable="値段"
          sortKey="price"
          isSelected={sortKey === 'price'}
          onSort={key => onSort(key)}
        />
        <HotelsClickableTh
          lable="レビュー"
          sortKey="reviewAverage"
          isSelected={sortKey === 'reviewAverage'}
          onSort={key => onSort(key)}
        />
        <th>レビュー件数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => (
        <HotelRow key={hotel.id} hotel={hotel} />
      ))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default connect(
  state => ({
    hotels: state.hotels,
  }),
  {}
)(HotelsTable);
