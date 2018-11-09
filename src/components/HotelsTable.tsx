import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as HotelRow from './HotelRow';
import * as HotelsClickableTh from './HotelsClickableTh';

interface IHotel {
  id: string;
  name: string;
  url: string;
  thumbUrl: string;
  price: number;
  reviewAverage: number;
  reviewCount: number;
  distance: number;
}

interface IHotels {}

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
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
