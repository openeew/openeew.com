import React from 'react';
import Header from '../components/Header';
import { SensorInfo, DashboardInfo, NetworkInfo } from '../components/Sensors';
import Banner from '../components/Banner';
import Diagram from '../components/Diagram';
import WhoWeAre from '../components/WhoWeAre';

const Landing = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Diagram />
      <WhoWeAre />
      <SensorInfo />
      <DashboardInfo />
      <NetworkInfo />
      <div className="landing__footer"></div>
    </div>
  );
};

export default Landing;
