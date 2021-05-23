import React from 'react';
import openeew_logo from '../content/assets/openeew_logo.svg';

const Banner = () => {
  return (
    <div className="landing__banner">
      <div className="landing__openEEW">
        <div className="landing__openEEWWrapper">
          <img src={openeew_logo} alt="OpenEEW Logo" />
          <h1>OpenEEW</h1>
        </div>
      </div>
      <div className="landing__mission">
        <h1>
          Open-source low-cost earthquake early warning solution for seismic
          risk mitigation.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
