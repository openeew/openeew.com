import React, { useContext } from 'react';
import { Grid, Row, Column, Button } from 'carbon-components-react';
import board from '../content/assets/openeew-node-board.jpg';
import nodeGray from '../content/assets/openeew-node-gray.jpg';
import dashboard from '../content/assets/dash.jpg';
import hazardmap from '../content/assets/hazardmap.jpg';
import AppContext from '../context/app';

const SensorInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <Grid className="info-section">
      <Row className="info-text">
        {/* TODO: Get text from json. */}
        <Column lg={4}>
          <h4>{t('sensor_title')}</h4>
        </Column>
        <Column lg={8}>
          <h3>{t('sensor_description')}</h3>
        </Column>
        <Column lg={{ span: 3, offset: 1 }}>
          <Button
            onClick={() => {
              window.open(
                'https://github.com/openeew/openeew/wiki/OpenEEW-Sensor',
                '_blank'
              );
            }}
            kind="secondary"
          >
            {t('sensor_button_text')}
          </Button>
        </Column>
      </Row>
      <Row className="info-media">
        <Column lg={{ span: 6, offset: 4 }}>
          <img
            className="sensor-image"
            src={board}
            alt="A 3D printed sensor"
          ></img>
        </Column>
        <Column lg={6}>
          <img
            className="sensor-image"
            src={nodeGray}
            alt="The OpenEEW Sensor"
          ></img>
        </Column>
      </Row>
    </Grid>
  );
};

const DashboardInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <Grid className="info-section">
      <Row className="info-text">
        {/* TODO: Get text from json. */}
        <Column lg={4}>
          <h4>{t('dashboard_title')}</h4>
        </Column>
        <Column lg={8}>
          <h3>{t('dashboard_description')}</h3>
        </Column>
        <Column lg={{ span: 3, offset: 1 }}>
          <Button
            onClick={() => {
              window.open(
                'https://github.com/openeew/openeew/wiki/Getting-Involved',
                '_blank'
              );
            }}
            kind="secondary"
          >
            {t('dashboard_button_text')}
          </Button>
        </Column>
      </Row>
      <Row className="info-media">
        <Column lg={{ span: 12, offset: 4 }}>
          <img
            className="dashboard-image"
            src={dashboard}
            alt="OpenEEW Dashboard"
          ></img>
        </Column>
      </Row>
    </Grid>
  );
};

const NetworkInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <Grid className="info-section">
      <Row className="info-text">
        {/* TODO: Get text from json. */}
        <Column lg={4}>
          <h4>{t('network_title')}</h4>
        </Column>
        <Column lg={8}>
          <h3>{t('network_description')}</h3>
        </Column>
        <Column lg={{ span: 3, offset: 1 }}>
          <Button
            onClick={() => {
              window.open(
                'https://github.com/openeew/openeew/wiki/Build-a-Network',
                '_blank'
              );
            }}
            kind="secondary"
          >
            {t('network_button_text')}
          </Button>
        </Column>
      </Row>
      <Row className="info-media">
        <Column lg={{ span: 11, offset: 4 }}>
          <img
            className="dashboard-image"
            src={hazardmap}
            alt="Earthquake hazard map"
          ></img>
        </Column>
      </Row>
    </Grid>
  );
};

export { SensorInfo, DashboardInfo, NetworkInfo };
