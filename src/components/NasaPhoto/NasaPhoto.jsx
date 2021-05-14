import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { urls } from '../api/api';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './nasaPhoto.scss';

// import { UrlContext } from '../context/UrlContext';

export const NasaPhoto = ({
  selectedRover,
  selectedCamera,
  solRange,
  setSelectedRover,
  setSelectedCamera,
  setSolRange,
}) => {
  const [photoData, setPhotoData] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const { baseUrl, token } = urls;
  let rover = '';
  let camera = '';

  if (selectedRover.hasOwnProperty('name') && selectedCamera.hasOwnProperty('name')) {
    rover = selectedRover.name.toLowerCase();
    camera = selectedCamera.name.toLowerCase()
  }

  const totalUrl = `${baseUrl}/${rover}/photos?sol=${solRange}&${camera}&${token}`;

  const fetchPhoto = async() => {
    if (rover && camera) {
      const response = await fetch(totalUrl);
      const data = await response.json();
      setPhotoData(data.photos);
    }

    setSelectedRover({});
    setSelectedCamera({});
    // setSolRange('1');
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  // const handleKeyUp = () => {
  //   const keyActionMap = {
  //     ArrowLeft: this.selectPreviousPhoto.bind(this),
  //     ArrowRight: this.selectNextPhoto.bind(this),
  //     Space: this.handlePauseClick.bind(this)
  //   }

  //   const action = keyActionMap[event.code];

  //   if (action) {
  //     event.preventDefault();
  //     action()
  //   };
  // };

  // const selectPreviousPhoto = () => {

  // };

  const reducer = (count, action) => {
    switch (action.type) {
      case 'increase':
        return count + 1;

      case 'decrease':
        return count - 1;

      default:
        return count;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  const decrease = () => dispatch({ type: 'decrease'})
  const increase = () => dispatch({ type: 'increase'})

  console.log(count);

  // console.log(photoData);

  // if (!photoData) {
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div className="photo">
      <div className="photo__download-block">
        <button
          className="photo__download-btn"
          type="button"
          onClick={fetchPhoto}
        >
          Download Photo
        </button>
        <div className="photo__download-icon">
          <PhotoCamera/>
        </div>
      </div>
        <button
          type="button"
          onClick={decrease}
          disabled={count === 0}
        >
          -
        </button>
        <button
          type="button"
          onClick={increase}
          disabled={count === photoData.length}
        >
          +
        </button>
      {!photoData.length && (
        <h2>
          No photos, try another camera
        </h2>
      )}
      {photoData.length > 1 && (
        <div className="photo">
          <h2>
            {`${count + 1} / ${photoData.length}`}
          </h2>
          <img src={photoData[count].img_src} alt="rover photo" />
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
