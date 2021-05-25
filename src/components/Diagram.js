import React from 'react';
import landscape from '../content/assets/landscape-darktype.jpg';

const Banner = () => {
  return (
    <div className="landing__diagram">
      <div className="landing__diagramContainer">
        <img src={landscape} alt="Earthquake animation" />
      </div>
    </div>
  );
};

export default Banner;
