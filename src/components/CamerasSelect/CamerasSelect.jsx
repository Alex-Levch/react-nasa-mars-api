import React from 'react';
import PropTypes from 'prop-types';

import './camerasSelect.scss';

export const CamerasSelect = ({
  cameras,
  filterByCamerasName,
  selectedCamera,
}) => (
  <div className="cameras">
    <select
      // eslint-disable-next-line react/prop-types
      value={selectedCamera.name}
      defaultValue="Choose Camera"
      name=""
      id=""
      className="cameras__select"
      onChange={filterByCamerasName}
    >
      <option
        value="Choose Camera"
        className="cameras__option"
        disabled
      >
        Choose Camera
      </option>
      {cameras.map(camera => (
        <option
          key={camera.id}
          value={camera.name}
          className="cameras__option"
        >
          {camera.name}
        </option>

      ))}
    </select>
  </div>
);

CamerasSelect.propTypes = {
  cameras: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  selectedCamera: PropTypes.shape({}).isRequired,

  filterByCamerasName: PropTypes.func.isRequired,
};
