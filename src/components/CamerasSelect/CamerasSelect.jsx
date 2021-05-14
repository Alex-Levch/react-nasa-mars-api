import React from 'react';
import PropTypes from 'prop-types';

import './camerasSelect.scss';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from '../RoverSelect';

export const CamerasSelect = ({
  cameras,
  filterByCamerasName,
  selectedCamera,
}) => {
  const classes = useStyles()

  return (
  <div className="cameras">
    <FormControl variant="outlined" className={classes.formControl }>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            className={classes.colorStyle}
          >
            Camera
          </InputLabel>
          <Select
            className={classes.bgcStyle}
            native
            value={selectedCamera.name}
            onChange={filterByCamerasName}
            defaultValue="Choose camera"
            label="Camera"
            inputProps={{
              name: 'rover',
              id: 'outlined-age-native-simple',
            }}
          >
            <option
              aria-label="None" value=""
              className="cameras__option"
            />
            {cameras.map(camera => (
              <option
                key={camera.id}
                value={camera.name}
              >
                {camera.name}
              </option>
            ))}
          </Select>
        </FormControl>
  </div>
  );
}
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
