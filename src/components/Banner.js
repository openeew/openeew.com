import React, { useContext } from 'react';
import openeew_logo from '../content/assets/openeew_logo.svg';

import AppContext from '../context/app';

const Banner = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="landing__banner">
      <div className="landing__openEEW">
        <div className="landing__openEEWWrapper">
          <img src={openeew_logo} alt="OpenEEW Logo" />
          <h1>OpenEEW</h1>
        </div>
      </div>
      <div className="landing__mission">
        <h2>{t('bannerMission')}</h2>
      </div>
    </section>
  );
};

export default Banner;
