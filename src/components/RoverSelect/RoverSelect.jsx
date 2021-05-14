import React from 'react';
import PropTypes from 'prop-types';

import './roverSelect.scss';

export const RoverSelect = ({ selectedRover, filterByRoverName, rovers }) => (

  <div className="rovers">
    <select
      // eslint-disable-next-line react/prop-types
      value={selectedRover.name}
      defaultValue="Choose rover"
      className="rovers__select"
      name=""
      id="select"
      onChange={filterByRoverName}
    >
      <option
        value="Choose rover"
        disabled
        className="rovers__option"
      >
        Choose rover
      </option>
      {rovers.map(rover => (
        <option
          key={rover.id}
          value={rover.name}
          className="rovers__option"
        >
          {rover.name}
        </option>
      ))}
    </select>
  </div>
);

RoverSelect.propTypes = {
  selectedRover: PropTypes.shape({}).isRequired,

  filterByRoverName: PropTypes.func.isRequired,

  rovers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
