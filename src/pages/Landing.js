import React, { useContext } from 'react';
import Header from '../components/Header';
import { SensorInfo, DashboardInfo, NetworkInfo } from '../components/Sensors';
import Banner from '../components/Banner';
import Diagram from '../components/Diagram';
import WhoWeAre from '../components/WhoWeAre';

import AppContext from '../context/app';

const Landing = () => {
  const { t } = useContext(AppContext);

  return (
    <div>
      <Header />
      <Banner />
      <Diagram />
      <WhoWeAre />
      <SensorInfo />
      <DashboardInfo />
      <NetworkInfo />
      <div className="landing__footer">
        <h3>
          OpenEEW is a{' '}
          <a
            target="_blank"
            href="https://www.linuxfoundation.org/projects/call-for-code"
          >
            Call for Code® with The Linux Foundation
          </a>{' '}
          project
        </h3>
        <h4>{t('copyright')}</h4>
      </div>
    </div>
  );
};

export default Landing;
