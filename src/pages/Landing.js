import React from 'react';
import Header from '../components/Header';
import { SensorInfo, DashboardInfo, NetworkInfo } from '../components/Sensors';
import Banner from '../components/Banner';
import Diagram from '../components/Diagram';
import WhoWeAre from '../components/WhoWeAre';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Diagram />
        <WhoWeAre />
        <SensorInfo />
        <DashboardInfo />
        <NetworkInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
