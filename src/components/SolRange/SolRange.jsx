import React from 'react';
import PropTypes from 'prop-types';

import './solRange.scss';

export const SolRange = ({
  solRange,
  selectSolDays,
  selectedRover
}) => {

  return (
    <div className="sol-range">
      <label
        htmlFor="rangeId"
        className="sol-range__label"
      >
        Choose sol:
      </label>
      <input
        min="1"
        max={selectedRover.max_sol}
        type="range"
        className="sol-range__field"
        id="rangeId"
        defaultValue={solRange}
        onChange={selectSolDays}
      />
      <span className="sol-range__text">
        {solRange}
      </span>
    </div>
  );
};

SolRange.propTypes = {
  solRange: PropTypes.string.isRequired,
  selectSolDays: PropTypes.func.isRequired,
  selectedRover: PropTypes.shape({
  }).isRequired,
};
