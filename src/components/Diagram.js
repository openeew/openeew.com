import React, { useContext } from 'react';
import landscape from '../content/assets/landscape_grey.jpg';

import AppContext from '../context/app';

const Banner = () => {
  const { t } = useContext(AppContext);

  return (
    <div className="landing__diagram">
      <div className="landing__diagramContainer">
        <img src={landscape} alt="Earthquake animation" />
      </div>
    </div>
  );
};

export default Banner;
