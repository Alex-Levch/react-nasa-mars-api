import React from 'react';
import PropTypes from 'prop-types';

import './roverSelect.scss';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  colorStyle: {
    color: '#fff',
    fontWeight: 600,
    textShadow: '0 0 15px',
  },
  borderStyle: {
    border: '2px solid #bbdefb'
  },
  bgcStyle: {
    backgroundColor: '#388e3c'
  }
}));


export const RoverSelect = ({ selectedRover, filterByRoverName, rovers }) => {
  const classes = useStyles()

  return (
    <div className="rovers">
      <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            htmlFor="outlined-age-native-simple"
            className={classes.colorStyle}
          >
            Rover
          </InputLabel>
          <Select
            className={classes.bgcStyle}
            native
            value={selectedRover.hasOwnProperty('name')
            ? selectedRover.name
            : "Choose rover"
            }
            onChange={filterByRoverName}
            label="Rover"
            inputProps={{
              name: 'rover',
              id: 'outlined-age-native-simple',
            }}
          >
            <option
              disabled
              aria-label="None" value="Choose rover"
              className="rovers__option"
            >
              Choose rover
            </option>
            {rovers.map(rover => (
              <option
                key={rover.id}
                value={rover.name}
              >
                {rover.name}
              </option>
            ))}
          </Select>
        </FormControl>
    </div>
);
}

RoverSelect.propTypes = {
  selectedRover: PropTypes.shape({}).isRequired,

  filterByRoverName: PropTypes.func.isRequired,

  rovers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
