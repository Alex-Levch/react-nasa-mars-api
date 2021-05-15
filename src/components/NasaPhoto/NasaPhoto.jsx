import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { urls } from '../api/api';

import Button from '@material-ui/core/Button';

// import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

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
  const [offSet, setOffset] = useState(0);
  const [photoLimit, setPhotoLimit] = useState(4);
  // const [minPhotoLimit, setMinPhotoLimit] = useState(1);
  // const [loading, setLoading] = useState(false);


  const { baseUrl, token } = urls;
  let rover = '';
  let camera = '';

  if(selectedRover && selectedCamera) {
    if (selectedRover.hasOwnProperty('name') && selectedCamera.hasOwnProperty('name')) {
      rover = selectedRover.name.toLowerCase();
      camera = selectedCamera.name.toLowerCase()
    }
  }

  const totalUrl = `${baseUrl}/${rover}/photos?sol=${solRange}&${camera}&${token}`;

  const reducer = (count, action) => {
    switch (action.type) {
      case 'increase':
        return count + 1;

      case 'decrease':
        return count - 1;

        case 'reset':
          return count = 0;

      default:
        return count;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  const decrease = () => dispatch({ type: 'decrease'})
  const increase = () => dispatch({ type: 'increase'})
  const reset = () => dispatch({ type: 'reset'})

  const fetchPhoto = async() => {
    if (rover && camera) {
      const response = await fetch(totalUrl);
      const data = await response.json();
      setPhotoData(data.photos);
    }

    setSelectedRover({});
    setSelectedCamera({});
    setSolRange('1');
    reset();
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className="photo">
      <div className="photo__download-block">
        <Button
          variant="contained"
          color="primary"
          onClick={fetchPhoto}
        >
          Download Photo
          <PhotoCamera/>
        </Button>
      </div>
        <div className="photo__buttons">
          <button
            type="button"
            onClick={decrease}
            disabled={count === 0}
            className="photo__btn"
          >
            <ArrowLeftIcon className="btn-icon" />
          </button>
          <button
            type="button"
            onClick={increase}
            disabled={count === photoData.length - 1}
            className="photo__btn"
          >
            <ArrowRightIcon className="btn-icon" />
          </button>
        </div>
      {!photoData.length && (
        <h2 className="photo__title-loading">
          No photos, try another camera
        </h2>
      )}
      {photoData.length > 1 && (
        <div className="photo__container">
          <h2 className="photo__title-count">
            {`${count + 1} / ${photoData.length}`}
          </h2>
          <img
            className="photo__img"
            src={(photoData[count]) && photoData[count].img_src}
            alt="rover photo"
          />
          {/* <div class="photo__btn-load">
            <Button
              variant="contained"
              color="primary"
              // onClick={}
            >
              Load more
            </Button>
          </div> */}
        </div>
      )}
    </div>
  );
};

NasaPhoto.propTypes = {
  selectedRover: PropTypes.shape({}).isRequired,
  selectedCamera: PropTypes.shape({}).isRequired,
  solRange: PropTypes.string.isRequired,

  setSelectedRover: PropTypes.func.isRequired,
  setSelectedCamera: PropTypes.func.isRequired,
  setSolRange: PropTypes.func.isRequired,
};
