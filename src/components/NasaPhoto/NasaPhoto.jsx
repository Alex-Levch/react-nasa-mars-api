/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import { urls } from '../api/api';

import './nasaPhoto.scss';

export const NasaPhoto = ({
  selectedRover,
  selectedCamera,
  solRange,
  setSelectedRover,
  setSelectedCamera,
  setSolRange,
}) => {
  const [photoData, setPhotoData] = useState([]);
  const [photoNumber, setPhotoNumber] = useState(1);

  const { baseUrl, token } = urls;
  let rover = '';
  let camera = '';

  if (selectedRover && selectedCamera) {
    if (selectedRover.hasOwnProperty('name')
    && selectedCamera.hasOwnProperty('name')) {
      rover = selectedRover.name.toLowerCase();
      camera = selectedCamera.name.toLowerCase();
    }
  }

  const totalUrl = `${baseUrl}/${rover}/photos?sol=${solRange}
  &${camera}&${token}`;

  const [buttons, setButtons] = useState([]);

  const fetchPhoto = async() => {
    if (rover && camera) {
      const response = await fetch(totalUrl);
      const data = await response.json();

      setPhotoData([...data.photos]);
    }

    setSelectedRover({});
    setSelectedCamera({});
    setSolRange('1');
    reset();
    setButtons([]);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);
  // , setButtonsLimit
  const [buttonsLimit] = useState(5);
  const [maxButtonsLimit, setMaxButtonsLimit] = useState(5);
  const [minButtonsLimit, setMinButtonsLimit] = useState(0);

  const decrease = () => {
    setPhotoNumber(prevValue => prevValue - 1);

    if ((photoNumber) % buttonsLimit === 0) {
      setMaxButtonsLimit(maxButtonsLimit - buttonsLimit);
      setMinButtonsLimit(minButtonsLimit - buttonsLimit);
    }
  };

  const increase = () => {
    setPhotoNumber(prevValue => prevValue + 1);

    if (photoNumber + 2 > maxButtonsLimit) {
      setMaxButtonsLimit(maxButtonsLimit + buttonsLimit);
      setMinButtonsLimit(minButtonsLimit + buttonsLimit);
    }
  };

  const reset = () => {
    setPhotoNumber(0);
  };

  function setImg({ target }) {
    // eslint-disable-next-line no-return-assign
    setPhotoNumber(prevValue => prevValue = Number(target.name) - 1);
  }

  // const [buttonsPerPage, setButtonsPerPage] = useState(5);

  photoData.map((photo, index) => buttons.push(index + 1));
  const currentButtons = buttons.slice(minButtonsLimit, maxButtonsLimit);
  // const [currentButtonnss, setCurrentButtonnss] = useState(currentButtons);
  // const lastButtons = (buttons[buttons.length - 1]) % buttonsLimit;

  // console.log(currentButtonnss);
  // console.log(photoNumber);
  // console.log(minButtonsLimit);
  // console.log(maxButtonsLimit);
  // console.log(minButtonsLimit + lastButtons);

  return (
    <div className="photo">
      <div className="photo__download-block">
        <Button
          variant="contained"
          color="primary"
          onClick={fetchPhoto}
        >
          Download Photo
          <PhotoCamera />
        </Button>
      </div>
      <div className="photo__buttons">
        <button
          type="button"
          onClick={decrease}
          disabled={photoNumber === 0}
          className="photo__btn photo__btn-left"
        >
          <ArrowLeftIcon className="photo__btn-icon" />
        </button>
        <button
          type="button"
          onClick={increase}
          disabled={photoNumber === photoData.length - 1}
          className="photo__btn photo__btn-right"
        >
          <ArrowRightIcon className="photo__btn-icon" />
        </button>
      </div>
      {!photoData.length && (
        <h2 className="photo__title-loading">
          No photos, try another camera
        </h2>
      )}
      {photoData.length > 1 && (
        <div className="photo__container">
          <div className="photo__buttons-row">
            {currentButtons.map(number => (
              <button
                className={classNames('photo__btn-num', {
                  photo__btn_active: photoNumber === number - 1,
                })}
                type="button"
                key={number}
                variant="contained"
                color="primary"
                name={number}
                onClick={(event) => {
                  setImg(event);
                  event.stopPropagation();
                }}
              >
                {number}
              </button>
            ))}
          </div>
          <h2 className="photo__title-count">
            {`${photoNumber + 1} / ${photoData.length}`}
          </h2>
          <img
            className="photo__img"
            src={(photoData[photoNumber]) && photoData[photoNumber].img_src}
            alt="rover"
          />
          {photoData[photoNumber] && (
            <p className="photo__date">
              {photoData[photoNumber].earth_date}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

NasaPhoto.propTypes = {
  selectedRover: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  selectedCamera: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  solRange: PropTypes.string.isRequired,

  setSelectedRover: PropTypes.func.isRequired,
  setSelectedCamera: PropTypes.func.isRequired,
  setSolRange: PropTypes.func.isRequired,
};
