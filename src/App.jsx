import React, { useState, useEffect } from 'react';
import { getRovers } from './components/api/api';
import { RoverSelect } from './components/RoverSelect';
import { CamerasSelect } from './components/CamerasSelect';
import { SolRange } from './components/SolRange';
import { NasaPhoto } from './components/NasaPhoto/';

import './app.scss';

export const App = () => {
  const [rovers, setRovers] = useState([]);
  const [selectedRover, setSelectedRover] = useState({});
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState({});
  const [solRange, setSolRange] = useState('1');

  const loadRoversFromPage = async() => {
    const roversFromServer = await getRovers();

    setRovers([...roversFromServer]);
  };

  useEffect(() => {
    loadRoversFromPage();
  }, []);

  const filterByRoverName = ({ target }) => {
    const currentRover = rovers.find(rover => rover.name === target.value);

    setSelectedRover(currentRover);
    setCameras(currentRover.cameras);
  };

  const filterByCamerasName = ({ target }) => {
    const currentCamera = cameras.find(camera => camera.name === target.value);

    setSelectedCamera(currentCamera);
  };

  const selectSolDays = ({ target }) => {
    setSolRange(target.value);
  };

  return (
    <div className="app">
      <h1 className="app__title">
        NASA APIs
      </h1>
      <div className="app__logo" />
      <div className="app__selects">
        <RoverSelect
          filterByRoverName={filterByRoverName}
          selectedRover={selectedRover}
          rovers={rovers}
        />
        <CamerasSelect
          filterByCamerasName={filterByCamerasName}
          selectedCamera={selectedCamera}
          cameras={cameras}
        />
        <SolRange
          selectSolDays={selectSolDays}
          solRange={solRange}
          selectedRover={selectedRover}
        />
      </div>
      <NasaPhoto
          selectedRover={selectedRover}
          selectedCamera={selectedCamera}
          solRange={solRange}
          setSelectedRover={setSelectedRover}
          setSelectedCamera={setSelectedCamera}
          setSolRange={setSolRange}
        />
    </div>
  );
};
