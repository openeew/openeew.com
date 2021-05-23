import React from 'react';
import Header from '../components/Header';
import  { SensorInfo, DashboardInfo, NetworkInfo } from '../components/Sensors';
import Banner from '../components/Banner';

const Landing = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SensorInfo />
      <DashboardInfo />
      <NetworkInfo />
    </div>
  );
};

export default Landing;
