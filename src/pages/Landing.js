import React from 'react';
import Header from '../components/Header';
import { SensorInfo, DashboardInfo, NetworkInfo } from '../components/Sensors';
import Banner from '../components/Banner';
import Diagram from '../components/Diagram';

const Landing = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Diagram />
      <SensorInfo />
      <DashboardInfo />
      <NetworkInfo />
    </div>
  );
};

export default Landing;
