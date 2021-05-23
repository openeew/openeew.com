import React, { useContext } from 'react';
import {
    Grid,
    Row,
    Column,
    Button
} from 'carbon-components-react';
import node3DPrint from '../content/assets/openeew-node-3dprint.jpg';
import nodeBlue from '../content/assets/openeew-node-blue.jpg'
import AppContext from '../context/app';

const SensorInfo = () => {
    const { t } = useContext(AppContext);

    return (
        <Grid className="info-section">
            <Row className="info-text">
                {/* TODO: Get text from json. */}
                <Column lg={4}><h4>{t("sensor_title")}</h4></Column>
                <Column lg={8}><h3>{t("sensor_description")}</h3></Column>
                <Column lg={4}><Button kind="secondary">{t("sensor_button_text")}</Button></Column>
            </Row>
            <Row className="info-media">
                <Column lg={{ span: 6, offset: 4 }}>
                    <img className="sensor-image" src={nodeBlue} alt="A 3D printed sensor"></img>
                </Column>
                <Column lg={6}>
                    <img className="sensor-image" src={node3DPrint} alt="The case for the sensor"></img>
                </Column>
            </Row>
        </Grid>
    )
}

const DashboardInfo = () => {
    const { t } = useContext(AppContext);

    return (
        <Grid className="info-section">
            <Row className="info-text">
                {/* TODO: Get text from json. */}
                <Column lg={4}><h4>{t("dashboard_title")}</h4></Column>
                <Column lg={8}><h3>{t("dashboard_description")}</h3></Column>
                <Column lg={4}><Button kind="secondary">{t("dashboard_button_text")}</Button></Column>
            </Row>
            <Row className="info-media">
                <Column lg={{ span: 12, offset: 4 }}>
                    <img className="dashboard-image" src={nodeBlue} alt="A 3D printed sensor"></img>
                </Column>
            </Row>
        </Grid>
    )
}

const NetworkInfo = () => {
    const { t } = useContext(AppContext);

    return (
        <Grid className="info-section">
            <Row className="info-text">
                {/* TODO: Get text from json. */}
                <Column lg={4}><h4>{t("network_title")}</h4></Column>
                <Column lg={8}><h3>{t("network_description")}</h3></Column>
                <Column lg={4}><Button kind="secondary">{t("network_button_text")}</Button></Column>
            </Row>
            <Row className="info-media">
                <Column lg={{ span: 12, offset: 4 }}>
                    <img className="dashboard-image" src={nodeBlue} alt="A 3D printed sensor"></img>
                </Column>
            </Row>
        </Grid>
    )
}

export { SensorInfo, DashboardInfo, NetworkInfo };